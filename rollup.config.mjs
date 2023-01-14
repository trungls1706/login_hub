import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from '@rollup/plugin-babel';

const config = [
  {
    input: ["src/index.js"],
    output: [
      {
        dir: "dist/esm",
        format: "esm",
        exports: "named",
        sourcemap: true,
      },
      {
        dir: "dist/cjs",
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
    ],
    plugins: [resolve(), commonjs(),babel({ babelHelpers: 'bundled' })],
  },
];

export default config;
