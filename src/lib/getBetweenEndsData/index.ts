import unpackPromiseSettledResults from "../helpers/unpackPromiseSettledRestults.js";
import getTournaments, { TournamentFilters } from "./getTournaments/index.js";
import { BeTournamet } from "./types.js";
import getAllTournamentRankingEventData from "./getAllTournamentRankingEventData/index.js";
export default async function getBetweenEndsData(filters?: TournamentFilters) {
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
        const tournamentLogDecorator = `${i0} / ${tournaments.length - 1}`;
        const rankingEventResolutions = getAllTournamentRankingEventData(
          tournament.events,
          tournamentLogDecorator
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

        const allEventResultResolutions: Array<
          Awaited<typeof rankingEventResolutions>
        > = [];
        unpackPromiseSettledResults(
          allEventResults,
          (resolution) => allEventResultResolutions.push(resolution),
          (rejection) => console.error(rejection)
        );

        return { tournament, results: allEventResultResolutions };
      })
    );
    const resolutions: Array<{
      tournament: BeTournamet;
      results: Array<
        Awaited<ReturnType<typeof getAllTournamentRankingEventData>>
      >;
    }> = [];
    unpackPromiseSettledResults(
      tournamentsResults,
      (resolution) => resolutions.push(resolution),
      (rejection) => console.error(rejection)
    );
    return resolutions;
  });
}
