import type { Meta, StoryObj } from "@storybook/react";

import LoginPage from "./index.page";

const meta = {
  title: "Projects/Pages/Login",
  component: LoginPage,
  tags: ["autodocs"],
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
