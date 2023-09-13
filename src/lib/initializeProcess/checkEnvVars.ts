import * as dotenv from "dotenv";
export default function checkEnvVars() {
  dotenv.config();
  const {
    NEO_URI,
    NEO_USER,
    NEO_PASS,
    PRODUCTION,
    GITHUB_REPO_OWNER,
    GITHUB_REPO_NAME,
    GITHUB_ACCESS_TOKEN,
    GITHUB_TARGET_FILE_PATH,
  } = process.env;

  if (
    NEO_URI === undefined ||
    NEO_USER === undefined ||
    NEO_PASS === undefined ||
    PRODUCTION === undefined ||
    GITHUB_REPO_OWNER === undefined ||
    GITHUB_REPO_NAME === undefined ||
    GITHUB_TARGET_FILE_PATH === undefined
  ) {
    throw new Error("Undefined environment variables");
  }
  console.log(`Production mode is: ${PRODUCTION}`);
  const neoConfig = {
    uri: NEO_URI,
    user: NEO_USER,
    pass: NEO_PASS,
  };
  const githubConfig = {
    accessToken: GITHUB_ACCESS_TOKEN,
    repoName: GITHUB_REPO_NAME,
    repoOwner: GITHUB_REPO_OWNER,
    filePath: GITHUB_TARGET_FILE_PATH,
  };
  return { neoConfig, githubConfig, production: PRODUCTION };
}
