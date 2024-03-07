import { Thead, Tr, Th, HStack, Box, Table } from "@chakra-ui/react";
import { ExampleTableHeader } from "./ExampleTableHeader";
import { ExampleTableRow } from "./ExampleTableRow";
import { PositionLayer } from "@/types/position-layer";

export const ExampleTable: React.FC = (props) => {
  // TODO データFetch
  /**
   * 検索条件
   * ・ソート
   * ・検索詳細
   * ・ページング
   */
  const mockData = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    positionLayer: PositionLayer.CHIEF,
    inputFlg: true,
    theme: "テーマ",
    charNum: 200,
  }));
  return (
    <Table>
      <ExampleTableHeader></ExampleTableHeader>
      {mockData.map((data) => (
        <ExampleTableRow {...data}></ExampleTableRow>
      ))}
    </Table>
  );
};
