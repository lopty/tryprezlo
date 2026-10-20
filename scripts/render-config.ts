import { readFile, writeFile } from "node:fs/promises";
import { ALL_ROUTES } from "../src/seo";
const yaml = await readFile("render.yaml", "utf8");
const start = yaml.split("    # Generated clean-route mappings")[0];
const routes = ALL_ROUTES.filter((p) => p !== "/")
  .map(
    (p) =>
      `      - type: redirect\n        source: ${p}/\n        destination: ${p}\n      - type: rewrite\n        source: ${p}\n        destination: ${p}/index.html`,
  )
  .join("\n");
await writeFile(
  "render.yaml",
  start +
    "    # Generated clean-route mappings: run npm run config:render after route changes.\n" +
    routes +
    "\n",
);
console.log("Updated Render route mappings.");
