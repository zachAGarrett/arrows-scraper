import interpretSchema from "./lib/initializeProcess/interpretSchema";
import checkEnvVars from "./lib/initializeProcess/checkEnvVars";

(async () => {
  const { neoConfig, githubConfig } = checkEnvVars();
  try {
    await interpretSchema({
      neoConfig,
      githubConfig,
      outputTypes: true,
    });
  } catch (error) {
    console.error(error);
  }
})();
