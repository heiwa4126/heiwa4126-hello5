import fs from "node:fs";

const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
delete pkg.scripts;
fs.writeFileSync("package.json", `${JSON.stringify(pkg, null, "\t")}\n`);
