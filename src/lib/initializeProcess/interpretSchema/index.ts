import neo4j from "neo4j-driver";
import { OGM } from "@neo4j/graphql-ogm";
import getSchemaFromGithub from "./getSchemaFromGithub";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { Neo4jGraphQL } from "@neo4j/graphql";
import generateTypes, { GenerateTypesProps } from "./generateTypes";

export interface NeoConfig {
  uri: string;
  user: string;
  pass: string;
}
export interface GithubConfig {
  accessToken?: string;
  repoName: string;
  repoOwner: string;
  filePath: string;
}
export interface TypegenConfig {
  outDir?: GenerateTypesProps["outDir"];
  fileName?: GenerateTypesProps["fileName"];
}
export interface SetupProps {
  neoConfig: NeoConfig;
  githubConfig: GithubConfig;
  outputTypes?: boolean;
  typegenConfig?: TypegenConfig;
}

export default async function interpretSchema({
  neoConfig,
  githubConfig,
  outputTypes = false,
  typegenConfig,
}: SetupProps) {
  const plaintextSchema = await getSchemaFromGithub(githubConfig);
  const githubConfigJSON = JSON.stringify(githubConfig, null, 2);
  if (plaintextSchema === undefined) {
    throw new Error(`Could not get a schema from ${githubConfigJSON}`);
  } else {
    console.debug(`Got schema from ${githubConfigJSON}`);
  }

  //// schema stuff
  const typeDefs = mergeTypeDefs([plaintextSchema]);
  const driver = neo4j.driver(
    neoConfig.uri,
    neo4j.auth.basic(neoConfig.user, neoConfig.pass)
  );
  const ogm = new OGM({ typeDefs, driver });
  let typegenResult: Promise<void> | undefined = undefined;
  if (outputTypes) {
    typegenResult = generateTypes({ ...typegenConfig, ogm });
  }
  const neoSchema = new Neo4jGraphQL({
    typeDefs,
    driver,
  });
  if (typegenResult) await typegenResult;
  return { neoSchema, driver, ogm };
}
