import { MatchStyle } from "../../../generated/ogm";
import { BeEventType } from "../types";

export default function mapMatchStyle(eventType: BeEventType) {
  if (eventType === BeEventType.MatchEvent) {
    return MatchStyle.Elim;
  } else if (eventType === BeEventType.RankingEvent) {
    return MatchStyle.Qual;
  } else if (eventType === BeEventType.CustomPointsEvent) {
    //todo: support custom points event types
    throw new Error(`Unsupported event type: ${eventType}`);
  } else {
    throw new Error(`Unsupported event type: ${eventType}`);
  }
}
