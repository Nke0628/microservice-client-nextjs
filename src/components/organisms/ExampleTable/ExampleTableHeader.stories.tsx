import type { Meta, StoryObj } from "@storybook/react";
import { ExampleTableHeader } from "./ExampleTableHeader";
import { Table } from "@chakra-ui/react";

const meta = {
  title: "Projects/Organism/ExampleTable/ExampleTableHeader",
  tags: ["autodocs"],
} satisfies Meta<typeof ExampleTableHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Table>
        <ExampleTableHeader></ExampleTableHeader>
      </Table>
    );
  },
};
