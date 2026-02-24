---
name: development-patterns
description: Testing, scripts, formatting, and linting conventions.
---

# Key Development Patterns

Testing strategy:

- Use vitest with globals enabled (see vite.config.ts)
- Import source files with .js extensions even from .ts files: import { hello } from "../src/index.js"
- Run pnpm run smoke-test to verify all module formats work correctly
- Smoke tests include browser IIFE format testing via Node.js vm module (examples/ex3.cjs)

Package.json script conventions:

- prepublishOnly: Runs full build + test pipeline automatically before any publish
- prepack/postpack: Uses @heiwa4126/clean-publish-scripts to strip scripts from package.json during packaging for security
- preinstall: Runs pnpm audit to check dependencies

Formatting and linting:

- Biome handles both formatting and linting (replaces ESLint + Prettier)
- Line width: 100 characters
- Strict TypeScript with noUncheckedIndexedAccess and exactOptionalPropertyTypes
