import type { Meta, StoryObj } from "@storybook/react";
import { WPRootComponent } from "./root";

const meta: Meta<typeof WPRootComponent> = {
    component: WPRootComponent,
    title: "Text/WPRootComponent",
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

        className: {
            name: "className",
            defaultValue: "",
            type: { name: "string", required: false },
            description: "Classe do input, para estilização externa",
        },
    },
};

export default meta;
type Story = StoryObj<typeof WPRootComponent>;

export const Children: Story = {
    args: {
        children: <h1>Renderizando com o filho</h1>,
    },
    render: (args) => <WPRootComponent {...args} />,
};

export const Size: Story = {
    args: {
        children: "Title",
    },
    render: (args) => <WPRootComponent {...args} />,
};

export const Bold: Story = {
    args: {
        children: "Title",
    },
    render: (args) => <WPRootComponent {...args} />,
};

export const ClassName: Story = {
    args: {
        children: "Title",
    },
    render: (args) => <WPRootComponent {...args} />,
};
