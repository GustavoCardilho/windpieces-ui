import type { Meta, StoryObj } from "@storybook/react";
import { WPButtonComponent } from "../Button/button";

const meta: Meta<typeof WPButtonComponent> = {
    component: WPButtonComponent,
    title: "Text/WPButtonComponent",
    tags: ["autodocs"],
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
type Story = StoryObj<typeof WPButtonComponent>;

export const Example: Story = {
    args: {
        children: "Title",
        asChild: false,
        bold: "bold",
        size: "md",
    },
    render: (args) => <WPButtonComponent {...args} />,
};
