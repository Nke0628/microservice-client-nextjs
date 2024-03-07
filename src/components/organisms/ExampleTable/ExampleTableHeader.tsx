import { Thead, Tr, Th, HStack, Box } from "@chakra-ui/react";
import { SortButton } from "./SortButton";
import { ExampleTableSortFiled } from "@/types/example-table-search-condition";
import { useSortButton } from "@/hooks/useSortButton";

type ExampleTableHeaderProps = {
  onChangeSort: () => void;
};

export const ExampleTableHeader: React.FC<ExampleTableHeaderProps> = ({
  onChangeSort,
}) => {
  const { getSortOrderBySortField, handleOnClickSortButton } =
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
                handleOnClickSortButton(ExampleTableSortFiled.POSITION_LAYER);
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
                handleOnClickSortButton(ExampleTableSortFiled.CHAR_NUM);
              }}
            ></SortButton>
          </HStack>
        </Th>
      </Tr>
    </Thead>
  );
};
