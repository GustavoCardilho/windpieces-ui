import type { Meta, StoryObj } from "@storybook/react";
import { WPButton } from "./index";

const meta: Meta<typeof WPButton> = {
  component: WPButton,
  title: "Text/WPButton",
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
    className: {
      name: "className",
      defaultValue: "",
      type: { name: "string", required: false },
      description: "Classe do input, para estilização externa",
    },
  },
};

export default meta;
type Story = StoryObj<typeof WPButton>;

export const Children: Story = {
  args: {
    children: <h1>Renderizando com o filho</h1>,
    asChild: true,
    bold: "normal",
    size: "md",
  },
  render: (args) => (
    <>
      <WPButton {...args}></WPButton>
    </>
  ),
};

export const Size: Story = {
  args: {
    children: "Title",
    asChild: false,
    bold: "normal",
    size: "xl",
  },
  render: (args) => (
    <>
      <WPButton {...args}></WPButton>
    </>
  ),
};

export const Bold: Story = {
  args: {
    children: "Title",
    asChild: false,
    bold: "800",
    size: "md",
  },
  render: (args) => (
    <>
      <WPButton {...args}></WPButton>
    </>
  ),
};

export const ClassName: Story = {
  args: {
    children: "Title",
    asChild: false,
  },
  render: (args) => (
    <>
      <WPButton {...args}></WPButton>
    </>
  ),
};
