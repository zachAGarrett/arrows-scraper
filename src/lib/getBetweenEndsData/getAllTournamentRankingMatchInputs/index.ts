import { OGM } from "@neo4j/graphql-ogm";
import unpackPromiseSettledResults from "../../helpers/unpackPromiseSettledRestults";
import { BeEventType, BeTournamet } from "../types";
import parseMatchInput from "./parseMatchInput";
import throttleMap from "../helpers/throttleMap";

export default async function getAllTournamentRankingMatchInputs(
  tournament: BeTournamet,
  tournamentLogDecorator: string,
  ogm: OGM
) {
  const rankingEvents = tournament.events.filter(
    (event) => event.event_type === BeEventType.RankingEvent
  );

  const queue = throttleMap(
    rankingEvents,
    async (event, i1) => {
      const eventLogDecorator = `${i1 + 1} / ${rankingEvents.length}`;
      if (event === undefined)
        throw new Error(
          `[${new Date().toISOString()}][${tournamentLogDecorator}][${eventLogDecorator}]: Event was undefined`
        );
      const { athleteInputs, matchInput } = await parseMatchInput(event);

      const Athlete = ogm.model("Athlete");
      console.debug(
        `[${new Date().toISOString()}][${tournamentLogDecorator}][${eventLogDecorator}]: Creating athletes`
      );
      const newAthletesResults = await Promise.allSettled(
        athleteInputs.map((input) => Athlete.create({ input }))
      );

      const Match = ogm.model("Match");
      console.debug(
        `[${new Date().toISOString()}][${tournamentLogDecorator}][${eventLogDecorator}]: Creating match`
      );
      const newMatch = await Match.create({ input: matchInput });

      return;
    },
    2500
  );
  // const rankingEventResults = await Promise.allSettled(
  //   rankingEvents.map(async (event, i1) => {
  //     const eventLogDecorator = `${i1 + 1} / ${rankingEvents.length}`;
  //     if (event === undefined)
  //       throw new Error(
  //         `[${new Date().toISOString()}][${tournamentLogDecorator}][${eventLogDecorator}]: Event was undefined`
  //       );
  //     const { athleteInputs, matchInput } = await parseMatchInput(event);

  //     const Athlete = ogm.model("Athlete");
  //     console.debug(
  //       `[${new Date().toISOString()}][${tournamentLogDecorator}][${eventLogDecorator}]: Creating athletes`
  //     );
  //     const newAthletesResults = await Promise.allSettled(
  //       athleteInputs.map((input) => Athlete.create({ input }))
  //     );

  //     const Match = ogm.model("Match");
  //     console.debug(
  //       `[${new Date().toISOString()}][${tournamentLogDecorator}][${eventLogDecorator}]: Creating match`
  //     );
  //     const newMatch = await Match.create({ input: matchInput });

  //     return;
  //   })
  // );

  // unpackPromiseSettledResults(
  //   rankingEventResults,
  //   undefined,
  //   (rejection, i) => {
  //     const eventLogDecorator = `${i + 1} / ${rankingEventResults.length}`;
  //     console.error(
  //       `[${new Date().toISOString()}][${tournamentLogDecorator}][${eventLogDecorator}]: ${rejection}`
  //     );
  //   }
  // );
  return;
}
