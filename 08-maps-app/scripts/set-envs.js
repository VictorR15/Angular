const { writeFileSync, mkdirSync } = require("fs");

require("dotenv").config();
const targetPath = "./src/environments/environments.ts";
const targetPathDev = "./src/environments/environments.development.ts";

const mapboxKey = process.env["MAPBOX_KEY"];

if (!mapboxKey) {
  throw new Error("MAPBOXKEY is not set");
}

const envFileContent = `
  export const environment = {
  mapboxKey:
    "${mapboxKey}",
};
`;

mkdirSync("./src/environments", { recursive: true });

writeFileSync(targetPath, envFileContent);
writeFileSync(targetPathDev, envFileContent);
