# CRA Release Evidence demo

[![Release evidence smoke test](https://github.com/mastermuetze/cra-release-evidence-demo/actions/workflows/release-evidence.yml/badge.svg)](https://github.com/mastermuetze/cra-release-evidence-demo/actions/workflows/release-evidence.yml)

This public repository is a small installable Node.js CLI used to exercise [CRA Release Evidence](https://github.com/mastermuetze/cra-release-evidence) on a real GitHub release.

It is a technical demonstration, not a commercial product, CRA scanner, legal opinion, conformity assessment, or guarantee of compliance.

## What the release workflow proves

For release `v0.1.0`, the repository workflow:

1. checks out the exact release tag with full Git history;
2. runs the CLI tests and writes JUnit XML;
3. generates a CycloneDX SBOM with npm;
4. runs `npm audit` and converts its result to SARIF without changing the finding severity;
5. compares the release to the explicit baseline tag `v0.0.0`;
6. invokes CRA Release Evidence at immutable commit `3166f1771bb9e42ef8b085acf6fae9f53e7f390a`;
7. verifies and retains the Markdown/JSON evidence package as a workflow artifact.

The job has only `contents: read`. Raw test and security reports are not copied into the evidence package. The generated SBOM is copied because it is part of the versioned evidence record.

## Run the demo CLI

```bash
npm ci
npm test
node src/cli.mjs --version
```

## Inspect the real release

- [Release workflow](.github/workflows/release-evidence.yml)
- [Releases](https://github.com/mastermuetze/cra-release-evidence-demo/releases)
- [Actions](https://github.com/mastermuetze/cra-release-evidence-demo/actions)

## Verified `v0.1.0` result

- [Release workflow run](https://github.com/mastermuetze/cra-release-evidence-demo/actions/runs/30742421348): passed
- Configured evidence status: `complete`, with zero gaps
- SBOM source relation: declared commit matches the release commit
- Package manifest: all SHA-256 entries verified
- [Download the evidence package](https://github.com/mastermuetze/cra-release-evidence-demo/releases/download/v0.1.0/cra-evidence-v0.1.0.zip)
- [Download its SHA-256 checksum](https://github.com/mastermuetze/cra-release-evidence-demo/releases/download/v0.1.0/cra-evidence-v0.1.0.zip.sha256)

These results describe configured technical completeness for this demo release only. They are not a legal compliance result.

## Evidence boundaries

The package indexes existing release evidence. It does not decide product scope, cybersecurity risk, residual-risk acceptance, conformity, CE marking, or regulatory reporting. Those decisions remain with responsible people.
