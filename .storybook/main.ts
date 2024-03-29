import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
    stories: [
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
        "../src/**/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        {
            name: "@storybook/addon-styling",
            options: {
                postCss: true,
            },
        },
        "@storybook/addon-backgrounds",
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {
            fastRefresh: true,
            strictMode: true,
        },
    },
    docs: {
        autodocs: "tag",
    },
};
export default config;
