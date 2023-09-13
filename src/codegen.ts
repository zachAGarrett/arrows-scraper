import interpretSchema from "./lib/initializeProcess/interpretSchema";
import checkEnvVars from "./lib/initializeProcess/checkEnvVars";

(async () => {
  const { neoConfig, githubConfig } = checkEnvVars();
  await interpretSchema({
    neoConfig,
    githubConfig,
    outputTypes: true,
  });
})();
