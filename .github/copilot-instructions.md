# Copilot Instructions

## Project Overview

This is a TypeScript library (`@heiwa4126/hello5`) that demonstrates modern npm packaging with dual ESM/CJS support and automated trusted publishing to npmjs via GitHub Actions with Sigstore attestation. The library exports a simple `hello()` function and provides a CLI tool.

## Build Outputs

The build produces the following outputs:

- **Node.js:**
  - ESM (`.js`)
  - CommonJS (`.cjs`)
  - TypeScript definitions (`.d.ts`)
- **Browser:**
  - ESM (for CDN import, e.g. esm.sh, jsDelivr, unpkg)
  - Classic Script (IIFE, exposes `Heiwa4126Hello5` global, minified)

## Architecture & Build System

**Dual Module Support Pattern:**

- Uses `tsdown` for bundling with both ESM (`.js`) and CJS (`.cjs`) outputs
- `package.json` exports field provides dual compatibility: `"import": "./dist/index.js"` and `"require": "./dist/index.cjs"`
- TypeScript is configured with `"module": "nodenext"` for modern module resolution
- CLI entry point ([`src/cli.ts`](src/cli.ts)) uses ESM imports with `.js` extension for compatibility

**Critical Build Flow:**

```bash
pnpm run build       # tsdown builds ESM/CJS/IIFE formats + types
pnpm test           # vitest with TypeScript support
pnpm run smoke-test # Tests all usage patterns (ESM/CJS/TS/IIFE)
```

## Key Development Patterns

**Testing Strategy:**

- Use `vitest` with globals enabled (see [`vite.config.ts`](vite.config.ts))
- Import source files with `.js` extensions even from `.ts` files: `import { hello } from "../src/index.js"`
- Run `pnpm run smoke-test` to verify all module formats work correctly
- Smoke tests include browser IIFE format testing via Node.js vm module ([`examples/ex3.cjs`](examples/ex3.cjs))

**Package.json Script Conventions:**

- `prepublishOnly`: Runs full build + test pipeline automatically before any publish
- `prepack`/`postpack`: Uses [@heiwa4126/clean-publish-scripts](https://www.npmjs.com/package/@heiwa4126/clean-publish-scripts) to strip scripts from package.json during packaging for security
- `preinstall`: Runs `pnpm audit` to check dependencies

**Formatting & Linting:**

- Biome handles both formatting and linting (replaces ESLint + Prettier)
- Line width: 100 characters
- Strict TypeScript with `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes`

## Publishing & CI/CD Workflow

**Trusted Publishing Setup:**
This project uses npm's trusted publishing feature. The workflow in [`.github/workflows/publish.yml`](.github/workflows/publish.yml):

- Triggers on semantic version tags: `v1.2.3` (release) or `v1.2.3-rc.1` (prerelease)
- Only runs if `github.repository_owner == github.actor` (security)
- Uses OIDC authentication (no npm tokens required)
- Automatically applies `--tag dev` for prerelease versions (contains `-`)
- Uses pnpm for dependency installation but npm for publishing

**Version Tagging:**

- Normal releases: `v1.2.3` → `latest` tag on npm
- Prereleases: `v1.2.3-rc.1` → `dev` tag on npm

## File Structure Conventions

- `src/`: TypeScript source files
- `examples/`: Usage examples for ESM (`.mjs`), CJS (`.cjs`), TypeScript (`.ts`), and IIFE (`.cjs`)
- `examples/local_http/`: Browser examples with local test server
- `scripts/`: Build utilities and test server
- `dist/`: Build output (`.js` ESM, `.cjs` CommonJS, `.global.js` IIFE, `.d.ts` types)

## Development Commands

```bash
# Development workflow
pnpm run build        # Build all formats + generate types
pnpm test            # Run tests once with coverage
pnpm run test:watch  # Watch mode testing
pnpm run smoke-test  # Test all module formats work

# Code quality
pnpm run lint        # Biome linting + pnpm audit
pnpm run format      # Biome formatting
pnpm run format:all  # Full formatting (pkg fix + biome + dprint + textlint)

# Development server
pnpm start           # Start test server at http://localhost:3000

# Publishing preparation
pnpm pack            # Create tarball for testing
pnpm run prepublishOnly  # Full pre-publish pipeline
```

## Important Notes

- Always use `.js` extensions in TypeScript imports for Node.js ESM compatibility
- The `"type": "module"` in [`package.json`](package.json) makes this an ESM-first project
- CLI script requires the shebang `#!/usr/bin/env node` in the built output
- Never commit npm tokens - this project uses OIDC trusted publishing exclusively
- Uses pnpm for development, but npm for publishing (due to trusted publishing requirements)
- Browser IIFE build uses global name `Heiwa4126Hello5` and is minified

## Build Configuration

- [`tsdown.config.ts`](tsdown.config.ts): Defines three build targets
  1. Node.js libs (ESM + CJS) with TypeScript definitions
  2. CLI tool (ESM only, minified)
  3. Browser classic script (IIFE, minified)

## Testing

- Unit tests: [`tests/index.test.ts`](tests/index.test.ts)
- Smoke tests: [`examples/ex1.mjs`](examples/ex1.mjs), [`examples/ex1.cjs`](examples/ex1.cjs), [`examples/ex1.ts`](examples/ex1.ts), [`examples/ex3.cjs`](examples/ex3.cjs)
- Browser examples: Available at [`examples/local_http/`](examples/local_http/) directory
- Test server: [`scripts/test_server.mjs`](scripts/test_server.mjs) provides local HTTP server for browser testing
