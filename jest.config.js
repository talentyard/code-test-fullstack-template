/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  transform: {
    "^.+.tsx?$": ["ts-jest", { compiler: "ts-patch/compiler" }],
  },
  setupFiles: ["<rootDir>jest-config.ts"],
};
