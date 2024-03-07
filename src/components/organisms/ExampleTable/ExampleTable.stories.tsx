import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "@chakra-ui/react";
import { ExampleTable } from "./ExampleTable";

const meta = {
  title: "Projects/Organism/ExampleTable/ExampleTable",
  tags: ["autodocs"],
} satisfies Meta<typeof ExampleTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Table>
        <ExampleTable></ExampleTable>
      </Table>
    );
  },
};
