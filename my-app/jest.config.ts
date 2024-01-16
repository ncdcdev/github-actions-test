import { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  roots: ["<rootDir>/src/tests"],
  preset: "ts-jest",
  testEnvironment: "node",
};

export default config;
