---
name: commands
description: Common scripts for building, testing, and publishing.
---

# Development Commands

Development workflow:

- pnpm run build # Build all formats + generate types
- pnpm test # Run tests once with coverage
- pnpm run test:watch # Watch mode testing
- pnpm run smoke-test # Test all module formats work

Code quality:

- pnpm run lint # Biome linting + pnpm audit
- pnpm run format # Biome formatting
- pnpm run format:all # Full formatting (pkg fix + biome + dprint + textlint)

Development server:

- pnpm start # Start test server at http://localhost:3000

Publishing preparation:

- pnpm pack # Create tarball for testing
- pnpm run prepublishOnly # Full pre-publish pipeline
