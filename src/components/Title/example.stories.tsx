import type { Meta, StoryObj } from "@storybook/react";
import { WPTitle } from "./index";

const meta: Meta<typeof WPTitle> = {
    component: WPTitle,
    title: "Text/WPTitle",
    argTypes: {
        testid: {
            name: "testid",
            defaultValue: "title",
            type: { name: "string", required: true },
            description: "Id para testes",
        },
        children: {
            name: "children",
            defaultValue: null,
            //@ts-ignore-next-line
            type: { name: "node", required: true },
            description: "Filho do titulo",
        },
        asChild: {
            name: "asChild",
            defaultValue: false,
            type: { name: "boolean", required: false },
            description: "Renderizar com o componente filho",
        },
        bold: {
            name: "bold",
            defaultValue: null,
            type: {
                name: "enum",
                required: false,
                value: ["light", "normal", "semibold", "bold", "800", "900"],
            },
        },
        size: {
            name: "size",
            defaultValue: null,
            type: {
                name: "enum",
                required: false,
                value: ["xs", "sm", "md", "lg", "xl", "2xl"],
            },
        },
        className: {
            name: "className",
            defaultValue: "",
            type: { name: "string", required: false },
            description: "Classe do input, para estilização externa",
        },

    },
};

export default meta;
type Story = StoryObj<typeof WPTitle>;

export const Children: Story = {
    args: {
        children: <h1>Renderizando com o filho</h1>,
        asChild: true,
        bold: "normal",
        size: "md",
    },
    render: (args) => <WPTitle {...args} />,
};

export const Size: Story = {
    args: {
        children: "Title",
        asChild: false,
        bold: "normal",
        size: "xl",
    },
    render: (args) => <WPTitle {...args} />,
};

export const Bold: Story = {
    args: {
        children: "Title",
        asChild: false,
        bold: "800",
        size: "md",
    },
    render: (args) => <WPTitle {...args} />,
};

export const ClassName: Story = {
    args: {
        children: "Title",
        asChild: false,
        bold: "normal",
        size: "md",
        className: "text-red-500",
    },
    render: (args) => <WPTitle {...args} />,
};
