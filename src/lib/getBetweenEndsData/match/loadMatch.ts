import { OGM } from "@neo4j/graphql-ogm";
import { Match, MatchCreateInput } from "../../../generated/ogm";

export interface CreatedAthleteResponse {
  matches: Array<CreatedMatch>;
}
export type CreatedMatch = Pick<Match, "id">;
export type PartialMatchInput = Pick<
  MatchCreateInput,
  "style" | "gender" | "division" | "event"
>;
export default async function loadMatch(
  input: PartialMatchInput,
  ogm: OGM,
  logDecorator?: string
) {
  // console.log(JSON.stringify(matchInput, undefined, 2));
  console.debug(logDecorator);
  const Match = ogm.model("Match");
  const newMatch: CreatedAthleteResponse = await Match.create({
    input: [input],
  });
  return newMatch.matches[0];
}
