import unpackPromiseSettledResults from "../helpers/unpackPromiseSettledRestults.js";
import getTournaments, { TournamentFilters } from "./getTournaments/index.js";
import { BeTournamet } from "./types.js";
import getAllTournamentRankingMatchInputs from "./getAllTournamentRankingMatchInputs/index.js";
import {
  CompetitionCreateInput,
  DataSourceType,
  MatchCreateInput,
} from "../../generated/ogm.js";
import { OGM } from "@neo4j/graphql-ogm";
import throttleMap from "./helpers/throttleMap.js";
export default async function getBetweenEndsData(
  ogm: OGM,
  filters?: TournamentFilters
) {
  // get all the tournaments in the BetweenEnds database
  return await getTournaments(filters).then(async (tournaments) => {
    if (tournaments === undefined)
      throw new Error(
        `Found no tournaments matching filter set ${JSON.stringify(
          filters,
          null,
          2
        )}`
      );
    // get the data for each tournament that matched the filter criteria

    const tournamentsResults = await Promise.allSettled(
      tournaments.map(async (tournament, i0) => {
        const tournamentLogDecorator = `${i0 + 1} / ${tournaments.length}`;

        const Competition = ogm.model("Competition");
        const maybeMatchedCompetitions = await Competition.find({
          where: {
            dataSourcesConnection_SINGLE: {
              edge: { id: String(tournament.id) },
            },
          },
        });
        if (maybeMatchedCompetitions.length > 0) {
          throw new Error(
            `[${new Date().toISOString()}][${tournamentLogDecorator}]: ${
              tournament.tournament_name
            } already exists`
          );
        }

        const competitionInput: CompetitionCreateInput = {
          name: tournament.tournament_name,
          start: tournament.start_date,
          end: tournament.end_date,
          complete: true,
          dataSources: {
            connectOrCreate: [
              {
                where: { node: { name: "https://resultsapi.herokuapp.com" } },
                onCreate: {
                  node: {
                    name: "https://resultsapi.herokuapp.com",
                    type: DataSourceType.Web,
                  },
                  edge: { id: String(tournament.id) },
                },
              },
            ],
          },
        };

        const newCompetition = await Competition.create({
          input: competitionInput,
        });

        const rankingEventResolutions = getAllTournamentRankingMatchInputs(
          tournament,
          tournamentLogDecorator,
          ogm
        );
        // // todo : get data for MatchEvent events
        // const matchEvents = tournament.events.filter(
        //   (event) => event.event_type === BeEventType.MatchEvent
        // );
        // // todo : get data for CustomPointsEvent events
        // const customPointsEvent = tournament.events.filter(
        //   (event) => event.event_type === BeEventType.CustomPointsEvent
        // );

        const allEventResults = await Promise.allSettled([
          rankingEventResolutions,
        ]);
        unpackPromiseSettledResults(allEventResults, undefined, (rejection) =>
          console.error(
            `[${new Date().toISOString()}][${tournamentLogDecorator}]: ${rejection}`
          )
        );

        return;
      })
    );
    unpackPromiseSettledResults(
      tournamentsResults,
      undefined,
      (rejection, i) => {
        const tournamentLogDecorator = `${i + 1} / ${
          tournamentsResults.length
        }`;
        console.error(
          `[${new Date().toISOString()}][${tournamentLogDecorator}]: ${rejection}`
        );
      }
    );
    return;
  });
}
