# CRA Release Evidence demo v0.1.1

This release repeats the public consumer smoke test against merged CRA Release Evidence `main` commit `137386fa91f3ee81b961e67f2fa315f4333803a0`.

The release workflow generates a CycloneDX SBOM, normalized JUnit test output, and npm-audit security evidence. It compares this release explicitly with `v0.1.0`, invokes the Action at the immutable commit, verifies every package file listed in `MANIFEST.sha256`, and retains the resulting package.

The [release workflow run](https://github.com/mastermuetze/cra-release-evidence-demo/actions/runs/30743346821) passed. The downloaded package reported configured status `complete` with zero gaps, linked the SBOM to the exact release commit, selected `v0.1.0` as the explicit predecessor, and passed every manifest check.

Attached assets:

- `cra-evidence-v0.1.1.zip` — inspected Markdown, JSON, change summary, manifest, and SBOM
- `cra-evidence-v0.1.1.zip.sha256` — checksum for the ZIP asset

The referenced Action commit is a reviewed source-only prototype commit, not an Action release or Marketplace listing. This demo is not a CRA scanner, legal advice, a conformity assessment, or evidence that any product complies with the Cyber Resilience Act.
