/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		globals: true,
		environment: "node",
		coverage: {
			exclude: ["test/testUtils.ts"],
			reporter: ["lcov", "json", "text"],
		},
	},
});
