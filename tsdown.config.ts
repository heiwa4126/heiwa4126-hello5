import { defineConfig } from "tsdown";

function fixCjsExtension({ format }: { format: string }) {
	if (format === "cjs") return { js: ".cjs" };
	return { js: ".js" };
}

export default defineConfig([
	{
		// nodejs libs(ESM + CJS), browser libs(ESM)
		entry: ["src/hello.ts"],
		format: ["esm", "cjs"],
		outDir: "dist",
		clean: true,
		unbundle: true,
		sourcemap: false,
		minify: false,
		dts: true,
		outExtensions: fixCjsExtension,
	},
	{
		// cli (ESM only)
		entry: ["src/cli.ts"],
		format: ["esm"],
		outDir: "dist",
		clean: true,
		unbundle: true,
		sourcemap: false,
		minify: true,
		dts: false,
		outExtensions: fixCjsExtension,
	},
	// Classic Script for Browser
	{
		entry: ["src/hello.ts"],
		format: ["iife"],
		outDir: "dist",
		sourcemap: false,
		clean: false,
		dts: false,
		globalName: "Heiwa4126Hello5",
		minify: true,
		outputOptions: {
			// outExtensionsでは対応できない。hello.iife.global.js になる
			// [name] はエントリファイル名 (hello) に置き換わります
			entryFileNames: "[name].global.js",
		},
	},
]);
