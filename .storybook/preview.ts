import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

import "../src/styles.css";
import "tailwindcss/tailwind.css";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        backgrounds: {
            default: "default",
            values: [
                {
                    name: "default",
                    value: "#202024",
                },
            ],
        },
        docs: {
            theme: themes.dark,
        },
    },
};

export default preview;
