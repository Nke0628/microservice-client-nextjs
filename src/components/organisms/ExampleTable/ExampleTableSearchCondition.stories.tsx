import type { Meta, StoryObj } from "@storybook/react";
import { ExampleTableSearchCondition } from "./ExampleTableSearchCondition";

const meta = {
  title: "Projects/Organism/ExampleTable/ExampleTableSearchCondition",
  tags: ["autodocs"],
  component: ExampleTableSearchCondition,
} satisfies Meta<typeof ExampleTableSearchCondition>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => {
    return (
      <ExampleTableSearchCondition {...args}></ExampleTableSearchCondition>
    );
  },
};
