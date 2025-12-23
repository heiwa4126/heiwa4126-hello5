import pkg from "../package.json" with { type: "json" };

export const version = pkg.version;

export function hello(): string {
	return "Hello!";
}
