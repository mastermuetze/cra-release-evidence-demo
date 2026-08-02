# CRA Release Evidence demo v0.1.1

This release repeats the public consumer smoke test against merged CRA Release Evidence `main` commit `137386fa91f3ee81b961e67f2fa315f4333803a0`.

The release workflow generates a CycloneDX SBOM, normalized JUnit test output, and npm-audit security evidence. It compares this release explicitly with `v0.1.0`, invokes the Action at the immutable commit, verifies every package file listed in `MANIFEST.sha256`, and retains the resulting package.

The referenced Action commit is a reviewed source-only prototype commit, not an Action release or Marketplace listing. This demo is not a CRA scanner, legal advice, a conformity assessment, or evidence that any product complies with the Cyber Resilience Act.
