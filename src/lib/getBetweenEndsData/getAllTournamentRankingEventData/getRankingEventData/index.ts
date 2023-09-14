import { fetchData } from "../../helpers/fetchData";
import {
  BeEndpoint,
  BeEventObj,
  BeScoresObj,
  BeEvent,
  EventProfile,
} from "../../types";
import parseEventData from "./parseEventData";

export async function getRankingEventData({ id: evId, event_type }: BeEvent) {
  // get the resources
  const [evJSON, evScoresJSON] = await Promise.all([
    // Get the details of the event
    fetchData(BeEndpoint.events, evId).then(
      async (event) => (await event.json()) as BeEventObj | undefined
    ),
    // Get the results of the event
    fetchData(BeEndpoint.events, evId, true).then(
      async (event) => (await event.json()) as BeScoresObj | undefined
    ),
  ]);

  if (evJSON === undefined || evJSON === null)
    throw new Error(`Undefined event details for ${BeEndpoint.events}/${evId}`);
  if (evScoresJSON === undefined || evScoresJSON === null)
    throw new Error(
      `Undefined event scores for ${BeEndpoint.events}/${evId}/scores`
    );

  const maybeDateStrings = evJSON.tdt?.split(" - ");
  const eventProfile: EventProfile = {
    start: maybeDateStrings && maybeDateStrings[0],
    end: maybeDateStrings && maybeDateStrings[1],
    comp_id: evId,
    event_type,
    arrows_per_end: evJSON.ape,
    name: evJSON.tnm,
    place: evJSON.tlc,
  };

  if (evJSON.rps === undefined || evJSON.rps === null)
    throw new Error(`${BeEndpoint.events}/${evId} has no athlete results.`);
  const aths = Object.values(evJSON.rps);

  // parse the scores for each athlete
  const athScores = aths.map((ath) => {
    const scoreString = evScoresJSON.ars[ath.aid];
    const eventData = parseEventData(ath, eventProfile, scoreString);
    return eventData;
  });
  return athScores;
}
