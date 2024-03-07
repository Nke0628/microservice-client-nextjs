import { Thead, Tr, Th, HStack, Box } from "@chakra-ui/react";
import { SortButton, SortOrder, nextSortMap } from "./SortButton";
import { useState } from "react";

export const ExampleTableHeader: React.FC = (props) => {
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.UN_SORT);
  const getNextSort = (sortOrder: SortOrder) => nextSortMap[sortOrder];
  const handleOnClickSortButton = () => {
    setSortOrder(getNextSort(sortOrder));
  };
  return (
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>役職層</Th>
        <Th>入力有無</Th>
        <Th>テーマ</Th>
        <Th>
          <HStack>
            <Box>文字数</Box>
            <SortButton
              sortOrder={sortOrder}
              onClickSortButton={handleOnClickSortButton}
            ></SortButton>
          </HStack>
        </Th>
      </Tr>
    </Thead>
  );
};
