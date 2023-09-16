import { BeRankingEventData, BeScoresObj, Season } from "../../types";
import parseMatch_qual from "../../match/parseMatch_qual";

interface ParseEventData_qualProps {
  eventId: string;
  event: BeRankingEventData;
  scores: BeScoresObj;
  season: Season;
}
export default function parseEventData_qual({
  eventId,
  event,
  scores,
  season,
}: ParseEventData_qualProps) {
  if (event.rps === undefined || event.rps === null) {
    throw new Error(`Event ${event.id} : ${event.enm} has no athlete results.`);
  }
  const athletes = Object.values(event.rps);

  /**
   * Get the match inputs for every division in this event
   */
  const divisionNames = [...new Set(athletes.map((ath) => ath.cnd))];
  const eventData = divisionNames.map((division, i) => {
    const divisionAthletes = athletes.filter((ath) => ath.cnd === division);
    const divisionMatchInput = parseMatch_qual({
      athletes: divisionAthletes,
      arrowsPerEnd: event.ape,
      scores,
      eventId,
      division,
      season,
    });

    return divisionMatchInput;
  });

  return eventData;
}
