import type { Meta, StoryObj } from "@storybook/react";
import { WPButton } from "./index";

const meta: Meta<typeof WPButton> = {
  component: WPButton,
  title: "Text/WPButtonComponent",
  tags: ["autodocs"],
  argTypes: {
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
    className: {
      name: "className",
      defaultValue: "",
      type: { name: "string", required: false },
      description: "Classe do input, para estilização externa",
    },
    disabled: {
      name: "disabled",
      defaultValue: false,
      type: { name: "boolean", required: false },
      description: "Desabilita o botão",
    },
    loading: {
      name: "loading",
      defaultValue: false,
      type: { name: "boolean", required: false },
      description: "Desabilita o botão",
    },
    loadingSize: {
      name: "loadingSize",
      defaultValue: null,
      type: {
        name: "enum",
        required: false,
        value: ["xs", "sm", "md", "lg", "xl", "2xl"],
      },
    },
    width: {
      name: "width",
      defaultValue: null,
      type: {
        name: "enum",
        required: false,
        value: ["xs", "sm", "md", "lg", "xl", "2xl"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof WPButton>;

export const Example: Story = {
  args: {
    asChild: false,
  },
  render: (args) => (
    <>
      <WPButton {...args}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-chevron-right"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
        <p>clique aqui</p>
      </WPButton>
    </>
  ),
};
