import {
  AthleteCreateInput,
  DataSourceType,
  EventMatchesCreateFieldInput,
  MatchAthletesConnectFieldInput,
  NameOrder,
} from "../../../../generated/ogm";
import { fetchData } from "../../helpers/fetchData";
import { BeEndpoint, BeEventObj, BeScoresObj, BeEvent } from "../../types";
// import mapDivision from "./mapDivision";
import mapEventGender from "./mapEventGender";
import mapMatchStyle from "./mapMatchStyle";
import parseSetInputs from "./parseSetInputs";

export interface ParseMatchInputResult {
  matchInput: EventMatchesCreateFieldInput;
  athleteInputs: Array<AthleteCreateInput>;
}
export default async function parseMatchInput({
  id: evId,
  event_type,
}: BeEvent): Promise<ParseMatchInputResult> {
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
  if (evJSON.rps === undefined || evJSON.rps === null) {
    console.log(evJSON);
    throw new Error(`${BeEndpoint.events}/${evId} has no athlete results.`);
  }

  const athletes = Object.values(evJSON.rps);
  const athleteInputs = athletes.map((ath) => {
    const athleteInput: AthleteCreateInput = {
      nameOrder: NameOrder.F,
      familyName: ath.fnm,
      givenName: ath.fnm,
      dataSources: {
        connectOrCreate: [
          {
            where: { node: { name: "https://resultsapi.herokuapp.com" } },
            onCreate: {
              node: {
                name: "https://resultsapi.herokuapp.com",
                type: DataSourceType.Web,
              },
              edge: { id: String(ath.aid) },
            },
          },
        ],
      },
    };
    return athleteInput;
  });

  // construct the match input and match the relevant values
  const matchInput: EventMatchesCreateFieldInput = {
    node: {
      complete: true,
      style: mapMatchStyle(event_type),
      gender: mapEventGender(athletes[0].cnd),
      sets: {
        create: athletes.flatMap((ath) => {
          const matchScoreString = evScoresJSON.ars[ath.aid];
          const setInputs = parseSetInputs({
            matchScoreString,
            setSize: evJSON.ape,
            athleteId: String(ath.aid),
          });

          return setInputs;
        }),
      },
      athletes: {
        connect: athletes.map(({ aid, cnd }) => {
          const athleteConnection: MatchAthletesConnectFieldInput = {
            where: {
              node: {
                dataSourcesConnection_SINGLE: { edge: { id: String(aid) } },
              },
            },
            edge: { division: cnd },
            // edge: { division: mapDivision(cnd) },
          };
          return athleteConnection;
        }),
      },
      dataSources: {
        connectOrCreate: [
          {
            where: { node: { name: "https://resultsapi.herokuapp.com" } },
            onCreate: {
              node: {
                name: "https://resultsapi.herokuapp.com",
                type: DataSourceType.Web,
              },
              edge: { id: String(evId) },
            },
          },
        ],
      },
    },
  };

  return { matchInput, athleteInputs };
}
