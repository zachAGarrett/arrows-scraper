import {
  AthleteSetsFieldInput,
  DataSourceType,
  NameOrder,
} from "../../../generated/ogm";
import { PartialSetInput } from "../set/parseSet";
import { BeAth } from "../types";
import { PartialAthleteInput } from "./loadAthlete";

export interface ParseAthleteProps {
  athlete: BeAth;
  sets: Array<{ node: PartialSetInput }>;
  matchId: string;
}
export default function parseAthlete({
  athlete,
  sets,
  matchId,
}: ParseAthleteProps) {
  const athleteInput: PartialAthleteInput = {
    nameOrder: NameOrder.F,
    familyName: athlete.fnm,
    givenName: athlete.lnm,
    sets: { create: sets },
    matches: { connect: [{ where: { node: { id: matchId } } }] },
    dataSources: {
      connectOrCreate: [
        {
          where: { node: { name: "https://resultsapi.herokuapp.com" } },
          onCreate: {
            node: {
              name: "https://resultsapi.herokuapp.com",
              type: DataSourceType.Web,
            },
            edge: { id: String(athlete.aid) },
          },
        },
      ],
    },
    divisions: {
      connectOrCreate: [
        {
          where: { node: { name: athlete.cnd } },
          onCreate: { node: { name: athlete.cnd } },
        },
      ],
    },
  };
  return athleteInput;
}
