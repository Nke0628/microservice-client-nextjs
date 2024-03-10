import { Thead, Tr, Th, HStack, Box } from "@chakra-ui/react";
import { SortButton } from "./SortButton";
import { ExampleTableSortFiled } from "@/types/example-table-search-condition";
import { useSortButton } from "@/hooks/useSortButton";
import { SortOrder } from "@/types/sort-order";
import { on } from "stream";

type ExampleTableHeaderProps = {
  onClickSortButton: (
    sortField: ExampleTableSortFiled,
    sortOrder: SortOrder
  ) => void;
};

export const ExampleTableHeader: React.FC<ExampleTableHeaderProps> = ({
  onClickSortButton,
}) => {
  const { getSortOrderBySortField, handleClickSortButton } =
    useSortButton<ExampleTableSortFiled>();
  return (
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>
          <HStack>
            <Box>役職層</Box>
            <SortButton
              sortOrder={getSortOrderBySortField(
                ExampleTableSortFiled.POSITION_LAYER
              )}
              onClickSortButton={() => {
                handleClickSortButton(
                  ExampleTableSortFiled.POSITION_LAYER,
                  onClickSortButton
                );
              }}
            ></SortButton>
          </HStack>
        </Th>
        <Th>入力有無</Th>
        <Th>テーマ</Th>
        <Th>
          <HStack>
            <Box>文字数</Box>
            <SortButton
              sortOrder={getSortOrderBySortField(
                ExampleTableSortFiled.CHAR_NUM
              )}
              onClickSortButton={() => {
                handleClickSortButton(
                  ExampleTableSortFiled.CHAR_NUM,
                  onClickSortButton
                );
              }}
            ></SortButton>
          </HStack>
        </Th>
      </Tr>
    </Thead>
  );
};
