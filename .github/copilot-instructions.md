# Copilot Instructions

## Agent Responsibilities and Goals

- Provide accurate, minimal guidance and code changes aligned with this repository's conventions.
- Keep guidance focused on intent and constraints; avoid procedural checklists here.
- Prefer clarity and safety over novelty; ask for clarification only when required.

## Technical Stack Assumptions (Facts)

- TypeScript library with dual ESM/CJS outputs and a CLI.
- ESM-first package design.
- Build tooling uses `tsdown`.
- Testing uses `vitest`.
- Formatting and linting use Biome.
- Development uses pnpm; publishing uses npm with trusted publishing (OIDC).
- Browser build includes an IIFE that exposes `Heiwa4126Hello5`.

## Decision Rules and Prohibitions (Abstract)

- Do not include project-specific step-by-step procedures in this file.
- Keep instructions at the policy or principle level.
- Avoid embedding volatile details (scripts, commands, or workflow steps) here.
- When a project-specific procedure is needed, reference the relevant Skill document.

## Skills Reference

- Project-specific procedures are documented in [.github/skills/\*/SKILL.md](.github/skills/*/SKILL.md). Use those for build, test, publish, and workflow details.
