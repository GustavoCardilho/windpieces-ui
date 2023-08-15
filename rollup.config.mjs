import postcss from "rollup-plugin-postcss";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import tailwindcss from "tailwindcss";
import tailwindConfig from "./tailwind.config.cjs";

export default [
    {
        input: "src/index.ts",
        output: [{ dir: "lib" }],
        plugins: [
            postcss({
                config: {
                    path: "./postcss.config.js",
                },
                extensions: [".css"],
                minimize: true,
                inject: {
                    insertAt: "top",
                },
                plugins: [tailwindcss(tailwindConfig)],
            }),
            babel({
                babelHelpers: "bundled",
                exclude: "node_modules/**",
                presets: ["@babel/preset-react"],
            }),
            typescript(),
            nodeResolve({
                extensions: [
                    ".js",
                    ".jsx",
                    ".ts",
                    ".tsx",
                    ".mjs",
                    ".js",
                    ".json",
                    ".node",
                ],
            }),
            terser(),
        ],
        external: [
            "react",
            "react/jsx-runtime",
            "tailwindcss",
            "@radix-ui/react-radio-group",
            "@radix-ui/react-switch",
        ],
    },
    {
        input: "lib/types/index.d.ts",
        output: [{ file: "lib/index.d.ts" }],
        external: [/\.css$/, "react", "react-dom"],
        plugins: [dts()],
    },
];
