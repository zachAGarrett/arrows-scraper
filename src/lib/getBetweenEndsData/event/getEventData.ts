import { fetchData } from "../helpers/fetchData";
import {
  BeEliminationEventData,
  BeEndpoint,
  BeRankingEventData,
  BeScoresObj,
} from "../types";

export default async function getEventData(eventId: number) {
  const [event, scores] = await Promise.all([
    // Get the details of the event
    fetchData(BeEndpoint.events, eventId).then(
      async (event) =>
        (await event.json()) as
          | BeRankingEventData
          | BeEliminationEventData
          | undefined
    ),
    // Get the results of the event
    fetchData(BeEndpoint.events, eventId, true).then(
      async (event) => (await event.json()) as BeScoresObj | undefined
    ),
  ]);

  if (event === undefined || event === null)
    throw new Error(
      `Undefined event details for ${BeEndpoint.events}/${eventId}`
    );
  if (scores === undefined || scores === null)
    throw new Error(
      `Undefined event scores for ${BeEndpoint.events}/${eventId}/scores`
    );

  return { event, scores };
}
