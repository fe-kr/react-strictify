module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: "./src",
  modulePaths: ["<rootDir>"],
  testRegex: ".*\\.spec\\.ts$",
  coverageDirectory: "../coverage",
  collectCoverageFrom: [
    "**/*.(t|j)s",
    "!**/index.(t|j)s",
  ],
};
