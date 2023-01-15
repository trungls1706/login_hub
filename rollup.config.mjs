import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
//optimize
import terser from "@rollup/plugin-terser";
import gzipPlugin from "rollup-plugin-gzip";

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
    plugins: [
      //optimize
      resolve(),
      commonjs(),
      terser(),
      gzipPlugin(),
    ],
  },
  {
    input: "dist/cjs/index.js",
    output: [{ file: "dist/index.js", format: "cjs" }],
  },
];

export default config;
