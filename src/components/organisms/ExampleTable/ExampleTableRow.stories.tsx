import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "@chakra-ui/react";
import { ExampleTableRow } from "./ExampleTableRow";
import { PositionLayer } from "@/types/position-layer";

const meta = {
  title: "Projects/Organism/ExampleTable/ExampleTableRow",
  tags: ["autodocs"],
  component: ExampleTableRow,
} satisfies Meta<typeof ExampleTableRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 1,
    positionLayer: PositionLayer.CHIEF,
    inputFlg: true,
    theme: "テーマ",
    charNum: 200,
  },
  render: (args) => {
    return (
      <Table>
        <ExampleTableRow {...args}></ExampleTableRow>
      </Table>
    );
  },
};
