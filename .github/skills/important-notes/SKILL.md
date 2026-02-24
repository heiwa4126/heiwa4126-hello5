---
name: important-notes
description: ESM rules, shebang, and publishing constraints.
---

# Important Notes

- Always use .js extensions in TypeScript imports for Node.js ESM compatibility
- The "type": "module" in package.json makes this an ESM-first project
- CLI script requires the shebang #!/usr/bin/env node in the built output
- Never commit npm tokens - this project uses OIDC trusted publishing exclusively
- Uses pnpm for development, but npm for publishing (due to trusted publishing requirements)
- Browser IIFE build uses global name Heiwa4126Hello5 and is minified
