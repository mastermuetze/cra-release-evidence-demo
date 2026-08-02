import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import test from "node:test";

import { buildReleaseMessage, VERSION } from "../src/cli.mjs";

test("builds a stable release message", () => {
  assert.equal(buildReleaseMessage(), `evidence-demo ${VERSION} (stable)`);
});

test("supports an explicit release channel", () => {
  assert.equal(
    buildReleaseMessage({ version: "1.2.3", channel: "preview" }),
    "evidence-demo 1.2.3 (preview)",
  );
});

test("prints the installed CLI version", () => {
  const stdout = execFileSync(process.execPath, ["src/cli.mjs", "--version"], {
    cwd: new URL("..", import.meta.url),
    encoding: "utf8",
  });
  assert.equal(stdout.trim(), VERSION);
});
