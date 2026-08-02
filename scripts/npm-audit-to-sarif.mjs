import { readFile, writeFile } from "node:fs/promises";

const [, , inputPath, outputPath] = process.argv;

if (!inputPath || !outputPath) {
  throw new Error("Usage: node scripts/npm-audit-to-sarif.mjs INPUT.json OUTPUT.sarif");
}

const audit = JSON.parse(await readFile(inputPath, "utf8"));
const vulnerabilities = audit.vulnerabilities ?? {};
const rules = new Map();
const results = [];

const sarifLevel = {
  critical: "error",
  high: "error",
  moderate: "warning",
  medium: "warning",
  low: "note",
  info: "note",
};

for (const [packageName, vulnerability] of Object.entries(vulnerabilities)) {
  const advisories = Array.isArray(vulnerability.via)
    ? vulnerability.via.filter((entry) => entry && typeof entry === "object")
    : [];

  const normalized = advisories.length > 0
    ? advisories
    : [{ source: packageName, title: `npm audit finding for ${packageName}`, severity: vulnerability.severity }];

  for (const advisory of normalized) {
    const source = String(advisory.source ?? packageName).replaceAll(/[^a-zA-Z0-9_.-]/g, "-");
    const ruleId = `npm-audit-${source}`;
    const severity = String(advisory.severity ?? vulnerability.severity ?? "moderate").toLowerCase();
    const message = advisory.title ?? `npm audit finding for ${packageName}`;

    rules.set(ruleId, {
      id: ruleId,
      name: `npm audit: ${packageName}`,
      shortDescription: { text: message },
      helpUri: advisory.url,
      properties: { securitySeverity: severity },
    });

    results.push({
      ruleId,
      level: sarifLevel[severity] ?? "warning",
      message: { text: message },
      locations: [{
        physicalLocation: {
          artifactLocation: { uri: "package-lock.json" },
          region: { startLine: 1 },
        },
      }],
    });
  }
}

const sarif = {
  $schema: "https://json.schemastore.org/sarif-2.1.0.json",
  version: "2.1.0",
  runs: [{
    tool: {
      driver: {
        name: "npm audit",
        informationUri: "https://docs.npmjs.com/cli/commands/npm-audit",
        rules: [...rules.values()],
      },
    },
    results,
  }],
};

await writeFile(outputPath, `${JSON.stringify(sarif, null, 2)}\n`, "utf8");
