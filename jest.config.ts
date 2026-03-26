import type { Config } from "jest";

const config: Config = {
  preset: "react-native",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.tsx"],
  testMatch: ["<rootDir>/tests/**/*.test.ts", "<rootDir>/tests/**/*.test.tsx"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native|@expo|expo(nent)?|expo-font|react-native-vector-icons|@expo/vector-icons|styled-components)/)",
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
    "/documentation/",
    "/src/",
  ],
};

export default config;
