import type { Meta, StoryObj } from "@storybook/react";
import { SegmentControl } from "./SegmentControl";
import { useState } from "react";
import { action } from "@storybook/addon-actions";

const meta = {
  component: SegmentControl,
  args: {
    options: [
      {
        value: "developer",
        label: "開発者",
      },
      {
        value: "general",
        label: "一般",
      },
      {
        value: "admin",
        label: "管理者",
      },
    ],
    value: "",
    onClickOption: () => {},
  },
} satisfies Meta<typeof SegmentControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>("developer");
    return (
      <SegmentControl
        {...args}
        value={value}
        onClickOption={(value) => {
          setValue(value);
          action("onClick")(value);
        }}
      ></SegmentControl>
    );
  },
};
