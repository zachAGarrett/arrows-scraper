import { NameOrder } from "../../../../../generated/ogm.js";
import { BeAth, EventProfile } from "../../../types.js";
import mapDivision from "./mapDivision.js";
import mapEventGender from "./mapEventGender.js";
import mapMatchStyle from "./mapMatchStyle.js";
import parseScores from "./parseScores.js";

export default function parseEventData(
  athlete: BeAth,
  eventProfile: EventProfile,
  scoreString: string
) {
  const { fnm, lnm, cnd } = athlete;
  const { event_type, comp_id, name, place, start, end } = eventProfile;
  const sets = parseScores(scoreString, eventProfile.arrows_per_end);

  if (sets === null) throw new Error(`Found no score data for ${fnm} ${lnm}`);

  const eventData = {
    id: comp_id.toString(),
    f_name: fnm,
    l_name: lnm,
    name_order: NameOrder.F,
    gender: mapEventGender(cnd),
    events: [
      {
        name: name,
        place: place,
        id: comp_id,
        country: "United States",
        sets,
        division: mapDivision(cnd),
        start,
        end,
        type: mapMatchStyle(event_type),
      },
    ],
  };
  return eventData;
}
