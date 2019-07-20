require("dotenv").config();
module.exports = {
  setupFilesAfterEnv: ["./rtl.setup.js"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/redux/store.js",
    "!src/pages/_app.jsx",
    "!src/pages/_document.jsx"
  ],
  coverageReporters: ["json", "lcov", "text-summary"],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  testPathIgnorePatterns: ["coverage"],
  coveragePathIgnorePatterns: ["src/constants/", "src/icons/"],
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/src/__mocks__/styleMock.js"
  }
};
