# CRA Release Evidence demo v0.1.0

This is the first public demo release of a deliberately small installable CLI.

The release workflow generates a CycloneDX SBOM, JUnit test output, and npm-audit security evidence. It then invokes CRA Release Evidence at an immutable full commit SHA and retains the resulting version-specific Markdown and JSON evidence package as a GitHub Actions artifact.

The [release workflow run](https://github.com/mastermuetze/cra-release-evidence-demo/actions/runs/30742421348) passed. The downloaded package reported configured status `complete` with zero gaps, linked the SBOM to the exact release commit, and passed every `MANIFEST.sha256` check.

Attached assets:

- `cra-evidence-v0.1.0.zip` — inspected Markdown, JSON, change summary, manifest, and SBOM
- `cra-evidence-v0.1.0.zip.sha256` — checksum for the ZIP asset

This demo is not a CRA scanner, legal advice, a conformity assessment, or evidence that any product complies with the Cyber Resilience Act.
