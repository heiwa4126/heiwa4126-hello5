---
name: publishing-ci
description: Trusted publishing and version tag behavior.
---

# Publishing and CI/CD Workflow

Trusted publishing setup (in .github/workflows/publish.yml):

- Triggers on semantic version tags: v1.2.3 (release) or v1.2.3-rc.1 (prerelease)
- Only runs if github.repository_owner == github.actor (security)
- Uses OIDC authentication (no npm tokens required)
- Automatically applies --tag dev for prerelease versions (contains '-')
- Uses pnpm for dependency installation but npm for publishing

Version tagging:

- Normal releases: v1.2.3 -> latest tag on npm
- Prereleases: v1.2.3-rc.1 -> dev tag on npm
