import type { Meta, StoryObj } from "@storybook/react";

import SamplePage from ".";

const meta = {
  title: "Projects/Pages/Sample",
  component: SamplePage,
  tags: ["autodocs"],
} satisfies Meta<typeof SamplePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
