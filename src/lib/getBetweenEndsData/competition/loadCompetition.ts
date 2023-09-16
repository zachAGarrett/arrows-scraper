import { OGM } from "@neo4j/graphql-ogm";
import { BeTournamet } from "../types";
import {
  Competition,
  CompetitionCreateInput,
  DataSourceType,
} from "../../../generated/ogm";
import parseCompetition from "./parseCompetition";
export type CreatedCompetition = Pick<
  Competition,
  | "id"
  | "complete"
  | "createdAt"
  | "name"
  | "processed"
  | "updatedAt"
  | "verified"
  | "start"
  | "end"
>;
export type PartialCompetitionInput = Pick<
  CompetitionCreateInput,
  "name" | "start" | "end" | "events" | "dataSources"
>;
export default async function loadCompetition(
  competition: BeTournamet,
  sourceName: string,
  ogm: OGM
) {
  const { id, tournament_name, events } = competition;
  const Competition = ogm.model("Competition");
  const existingCompetition = await Competition.find({
    where: {
      dataSourcesConnection_SINGLE: {
        edge: { id: String(id) },
      },
    },
  });
  if (existingCompetition.length > 0) {
    throw new Error(`[${tournament_name} | ${id}]: Competition already exists`);
  }
  const competitionInput: PartialCompetitionInput = parseCompetition(
    competition,
    sourceName
  );
  const newComps = (await Competition.create({
    input: [competitionInput],
  })) as {
    competitions: Array<CreatedCompetition>;
  };
  return { competition: newComps.competitions[0], events };
}
