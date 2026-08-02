# Changelog

## 0.1.2

- Declare the producing release commit for both the SBOM and collected test/security evidence.
- Reject declared evidence from a different or unresolvable producer revision.
- Exercise CRA Release Evidence at an immutable, CI-verified commit.

## 0.1.1

- Pin the smoke test to the merged CRA Release Evidence `main` commit.
- Compare the demo release explicitly with its previous published version.

## 0.1.0

- Produce release-specific SBOM, test, security, and Git-change evidence in GitHub Actions.
- Retain the generated Markdown and JSON evidence package for inspection.

## 0.0.0

- Establish the baseline used by the release-evidence smoke test.
