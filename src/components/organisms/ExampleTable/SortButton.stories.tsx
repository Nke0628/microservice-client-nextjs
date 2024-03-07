import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "@chakra-ui/react";
import { SortButton } from "./SortButton";
import { SortOrder } from "@/types/sort-order";

const meta = {
  title: "Projects/Organism/ExampleTable/SortButton",
  tags: ["autodocs"],
  component: SortButton,
} satisfies Meta<typeof SortButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sortOrder: SortOrder.UN_SORT,
  },
  render: (args) => {
    return (
      <Table>
        <SortButton {...args}></SortButton>
      </Table>
    );
  },
};
