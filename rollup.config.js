import resolve from "@rollup/plugin-node-resolve";
import commonJS from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "./src/index.ts",
  external: ["nakama-runtime"],
  plugins: [
    resolve(),
    typescript(),
    json(),
    commonJS(),
    babel({ babelHelpers: "bundled" }),
  ],
  output: {
    file: "build/index.js",
  },
};
