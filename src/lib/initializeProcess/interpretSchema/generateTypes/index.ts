import { OGM, generate } from "@neo4j/graphql-ogm";
import fs from "fs";

export interface GenerateTypesProps {
  ogm: OGM;
  outDir?: string;
  fileName?: string;
}
export default async function generateTypes({
  ogm,
  outDir,
  fileName,
}: GenerateTypesProps) {
  try {
    const codegenTarget = {
      dir: outDir || "./src/generated/",
      fileName: fileName || "ogm.ts",
    };

    // Create the file path if it doesn't exist
    if (!fs.existsSync(codegenTarget.dir)) {
      fs.mkdirSync(codegenTarget.dir, { recursive: true });
    }

    await generate({
      ogm,
      outFile: codegenTarget.dir + codegenTarget.fileName,
    });
    console.log(
      `Successfully generated types at ${
        codegenTarget.dir + codegenTarget.fileName
      }`
    );
  } catch (error) {
    console.error(error);
  }
}
