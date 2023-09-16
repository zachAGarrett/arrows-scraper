import { OGM } from "@neo4j/graphql-ogm";
import { Athlete, AthleteCreateInput } from "../../../generated/ogm";

export interface CreateAthleteResponse {
  athletes: Array<CreatedAthlete>;
}
export type CreatedAthlete = Pick<Athlete, "id">;
export type PartialAthleteInput = Pick<
  AthleteCreateInput,
  | "nameOrder"
  | "familyName"
  | "givenName"
  | "dataSources"
  | "divisions"
  | "sets"
  | "matches"
>;
export default async function loadAthlete(
  input: PartialAthleteInput,
  athleteDataSourceId: string,
  matchId: string,
  ogm: OGM,
  logDecorator?: string
) {
  // console.log(JSON.stringify(matchInput, undefined, 2));
  console.debug(logDecorator);
  const Athlete = ogm.model("Athlete");
  const findAthlete: { athletes: [{ id: string }] } = await Athlete.find({
    where: {
      AND: [
        {
          dataSourcesConnection_SINGLE: {
            edge: {
              id: athleteDataSourceId,
            },
          },
          matches_SINGLE: {
            id: matchId,
          },
        },
      ],
    },
  });
  if (findAthlete.athletes?.length > 0) {
    throw new Error("Athlete already exists for this match");
  }
  const newAthlete: CreateAthleteResponse = await Athlete.create({
    input: [input],
  });
  return newAthlete.athletes[0];
}
