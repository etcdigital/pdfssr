const { defaults } = require("jest-config");

module.exports = {
	preset: "ts-jest",
	moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "json"],
	testPathIgnorePatterns: ["/node_modules/", "/build/", "/dist/"],
	globals: {
		"ts-jest": { tsconfig: "<rootDir>/tsconfig.json", diagnostics: false },
	},
	testEnvironment: "node",
	collectCoverage: true,
	bail: true,
	verbose: true,
	coverageDirectory: "<rootDir>/coverage",
	collectCoverageFrom: ["src/**/*.{ts,js}"],
	coverageReporters: ["lcov", "clover"],
};
