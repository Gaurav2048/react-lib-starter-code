/** @type {import('jest').Config} */
import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";


module.exports = {
  preset: "ts-jest", // For TypeScript projects
  testEnvironment: "jest-environment-jsdom", // Specify the installed environment
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Transpile TypeScript files
  },
  // moduleNameMapper: {
  //   "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock CSS imports
  // },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/" }),
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};
