import initializeProcess from "./lib/initializeProcess";

(async () => {
  const { neoSchema, ogm, production } = await initializeProcess();
})();
