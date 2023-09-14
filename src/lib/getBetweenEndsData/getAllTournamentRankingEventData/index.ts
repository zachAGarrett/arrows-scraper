import unpackPromiseSettledResults from "../../helpers/unpackPromiseSettledRestults";
import { BeEvent, BeEventType } from "../types";
import { getRankingEventData } from "./getRankingEventData";

export default async function getAllTournamentRankingEventData(
  tournamentEvents: Array<BeEvent>,
  tournamentLogDecorator: string
) {
  const rankingEvents = tournamentEvents.filter(
    (event) => event.event_type === BeEventType.RankingEvent
  );
  const rankingEventResults = await Promise.allSettled(
    rankingEvents.map(async (event, i1) => {
      const eventLogDecorator = `${i1} / ${rankingEvents.length - 1}`;
      if (event === undefined)
        throw new Error(
          `[${new Date().toISOString()}][${tournamentLogDecorator}][${eventLogDecorator}]: Event was undefined`
        );
      const eventData = await getRankingEventData(event);
      return eventData;
    })
  );

  const resolutions: Array<Awaited<ReturnType<typeof getRankingEventData>>> =
    [];
  unpackPromiseSettledResults(
    rankingEventResults,
    (resolution) => resolutions.push(resolution),
    (rejection) => console.error(rejection)
  );
  return resolutions;
}
