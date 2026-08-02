#!/usr/bin/env node

import { pathToFileURL } from "node:url";

import { formatReleaseLabel } from "@cra-release-evidence-demo/release-format";

export const VERSION = "0.1.1";

export function buildReleaseMessage({ version = VERSION, channel = "stable" } = {}) {
  return formatReleaseLabel(version, channel);
}

function run(argv) {
  if (argv.includes("--version")) {
    process.stdout.write(`${VERSION}\n`);
    return;
  }

  if (argv.includes("--help")) {
    process.stdout.write("Usage: evidence-demo [--version] [--help]\n");
    return;
  }

  process.stdout.write(`${buildReleaseMessage()}\n`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  run(process.argv.slice(2));
}
