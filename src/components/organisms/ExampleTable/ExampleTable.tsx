import { Table } from "@chakra-ui/react";
import { ExampleTableHeader } from "./ExampleTableHeader";
import { ExampleTableRow } from "./ExampleTableRow";
import { PositionLayer } from "@/types/position-layer";
import { SortOrder } from "@/types/sort-order";
import { useState } from "react";
import { ExampleTableSortFiled } from "@/types/example-table-search-condition";

export const ExampleTable: React.FC = (props) => {
  // TODO データFetch
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.UN_SORT);
  const [sortField, setSortField] = useState<ExampleTableSortFiled>(
    ExampleTableSortFiled.CHAR_NUM
  );
  const handleClickSortButton = (
    sortField: ExampleTableSortFiled,
    sortOrder: SortOrder
  ) => {
    setSortField(sortField);
    setSortOrder(sortOrder);
  };
  const mockData = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    positionLayer: PositionLayer.CHIEF,
    inputFlg: true,
    theme: "テーマ",
    charNum: 200,
  }));
  return (
    <Table>
      <ExampleTableHeader
        onClickSortButton={handleClickSortButton}
      ></ExampleTableHeader>
      {mockData.map((data) => (
        <ExampleTableRow key={data.id} {...data}></ExampleTableRow>
      ))}
    </Table>
  );
};
