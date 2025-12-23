import pkg from "../package.json" with { type: "json" };

function hello(): string {
	return "Hello!";
}

const ver = pkg.version;

export { hello, ver };
