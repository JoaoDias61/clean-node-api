export default {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir/src/**/*.ts'],
  coverageDirectory: "coverage",
  coverageProvider: "",
  testEnvironment: "jest-environment-node",
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
};
