import { readFile, writeFile } from "node:fs/promises";

const [, , inputPath, outputPath] = process.argv;

if (!inputPath || !outputPath) {
  throw new Error("Usage: node scripts/normalize-node-junit.mjs INPUT.xml OUTPUT.xml");
}

const input = await readFile(inputPath, "utf8");
const tests = [...input.matchAll(/<testcase\b/g)].length;
const failures = [...input.matchAll(/<failure\b/g)].length;
const errors = [...input.matchAll(/<error\b/g)].length;
const skipped = [...input.matchAll(/<skipped\b/g)].length;

if (tests === 0 || !input.includes("<testsuites>") || !input.includes("</testsuites>")) {
  throw new Error("Node JUnit output did not contain the expected testsuites and testcase elements");
}

const suiteStart = `<testsuites tests="${tests}" failures="${failures}" errors="${errors}" skipped="${skipped}">\n\t<testsuite name="node:test" tests="${tests}" failures="${failures}" errors="${errors}" skipped="${skipped}">`;
const normalized = input
  .replace("<testsuites>", suiteStart)
  .replace("</testsuites>", "\t</testsuite>\n</testsuites>");

await writeFile(outputPath, normalized, "utf8");
