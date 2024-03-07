import type { Meta, StoryObj } from "@storybook/react";
import { ExampleTableArea } from "./ExampleTableArea";

const meta = {
  title: "Projects/Organism/ExampleTable/ExampleTableArea",
  tags: ["autodocs"],
  component: ExampleTableArea,
} satisfies Meta<typeof ExampleTableArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <ExampleTableArea></ExampleTableArea>;
  },
};
