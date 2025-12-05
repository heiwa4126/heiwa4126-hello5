#! /usr/bin/env node
import pkg from "../package.json" with { type: "json" };
import { hello } from "./hello.js";

function printHelp() {
	console.log(`Usage: heiwa4126-hello5 [-h|--help] [-v|--version]

Options:
  -h, --help     Show this help message
  -v, --version  Show version`);
}

function printVersion() {
	console.log(String(pkg.version));
}

function main() {
	const argv = process.argv.slice(2);
	if (argv.includes("-h") || argv.includes("--help")) {
		printHelp();
		process.exit(0);
	}
	if (argv.includes("-v") || argv.includes("--version")) {
		printVersion();
		process.exit(0);
	}

	console.log(hello());
}

main();
