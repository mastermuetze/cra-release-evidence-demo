# CRA Release Evidence demo v0.1.2

This release exercises producer-revision checks for the SBOM, test results, and security scan collected by CRA Release Evidence.

The release workflow is expected to:

- compare `v0.1.2` with the previous release `v0.1.1`;
- declare the exact release commit that produced every configured evidence input;
- require the SBOM, test results, security scan, and change summary;
- fail when configured evidence is missing or declares a different producer revision;
- retain a versioned Markdown/JSON evidence package with a SHA-256 manifest.

The workflow uses immutable CRA Release Evidence commit `625729f34a9ab8fcdecff1ab9ab2b8755b4ab00d` and only grants `contents: read`.

The generated record describes technical evidence completeness for this demo release. It is not a legal opinion, conformity assessment, or guarantee of CRA compliance.

## Verified result

- [Release workflow run](https://github.com/mastermuetze/cra-release-evidence-demo/actions/runs/30748406259): passed
- Configured evidence status: `complete`, with zero gaps
- SBOM source relation: declared commit matches the release commit
- Test/security producer relation: both declared commits match the release commit
- SHA-256 package manifest: independently verified
- [Evidence package](https://github.com/mastermuetze/cra-release-evidence-demo/releases/download/v0.1.2/cra-evidence-v0.1.2.zip)
- [Package checksum](https://github.com/mastermuetze/cra-release-evidence-demo/releases/download/v0.1.2/cra-evidence-v0.1.2.zip.sha256)
