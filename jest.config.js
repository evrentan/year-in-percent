export default {
    collectCoverage: true,
    collectCoverageFrom: [
        "src/services/CalculateYearCompletionPercentage.js",
        "!**/node_modules/**"
    ],
    coverageDirectory: "coverage",
    coverageReporters: ["text", "lcov"],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    },
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest",
    },
    testEnvironment: "node",
    verbose: true,
    moduleNameMapper: {
        "^(\\.{1,2}/.*)\\.js$": "$1",
        "^@/(.*)$": "<rootDir>/src/$1"
    }
};
