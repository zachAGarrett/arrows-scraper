// import getBetweenEndsData from "./lib/getBetweenEndsData";
// import initializeProcess from "./lib/initializeProcess";
// import fs from "fs";

// (async () => {
//   const { neoSchema, ogm, production } = await initializeProcess();
//   const beData = await getBetweenEndsData({ name: "USAT" });

//   ogm.init();
//   // insert data

//   const filePath = "dump.json";
//   try {
//     // Convert the JSON data to a string with 2-space indentation
//     const jsonData = JSON.stringify(beData, null, 2);

//     // Write the JSON data to the file
//     fs.writeFileSync(filePath, jsonData, "utf8");

//     console.log(`JSON data saved to ${filePath}`);
//   } catch (error) {
//     console.error(`Error saving JSON data to ${filePath}: ${error}`);
//   }
// })();
