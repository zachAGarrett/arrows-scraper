import interpretSchema from "./interpretSchema";
import checkEnvVars from "./checkEnvVars";

export default async function initializeProcess() {
  const { neoConfig, githubConfig, production } = checkEnvVars();
  const schema = await interpretSchema({ neoConfig, githubConfig });
  return { ...schema, production };
}
