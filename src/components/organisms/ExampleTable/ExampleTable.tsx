import { Flex, Spinner, Table, Td, Thead, Tr } from "@chakra-ui/react";
import { ExampleTableHeader } from "./ExampleTableHeader";
import { ExampleTableRow } from "./ExampleTableRow";
import { PositionLayer } from "@/types/position-layer";
import { SortOrder } from "@/types/sort-order";
import { useState } from "react";
import { ExampleTableSortFiled } from "@/types/example-table-search-condition";
import { graphql } from "../../../gql/gql";
import { useQuery } from "urql";

type ExampleTableProps = {
  keyword: string;
};

export const ExampleTable: React.FC<ExampleTableProps> = ({ keyword }) => {
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

  // 検索クエリ
  const queryTest = graphql(/* GraphQL */ `
    query FetchUserBySearchCondition(
      $keyword: String!
      $limit: Float!
      $offset: Float!
      $sortField: String!
      $sortOrder: Float!
    ) {
      fetchUsersBySearchCondition(
        keyword: $keyword
        limit: $limit
        offset: $offset
        sortField: $sortField
        sortOrder: $sortOrder
      ) {
        id
        name
        department {
          id
        }
      }
    }
  `);
  const [{ data, fetching }] = useQuery({
    query: queryTest,
    variables: {
      keyword,
      limit: 1,
      offset: 1,
      sortField,
      sortOrder,
    },
  });

  return (
    <Table>
      <ExampleTableHeader
        onClickSortButton={handleClickSortButton}
      ></ExampleTableHeader>
      {fetching ? (
        <Thead>
          <Tr>
            <Td colSpan={5}>
              <Flex justifyContent="center" alignItems="center" minH="200px">
                <Spinner />
              </Flex>
            </Td>
          </Tr>
        </Thead>
      ) : (
        mockData.map((data) => (
          <ExampleTableRow key={data.id} {...data}></ExampleTableRow>
        ))
      )}
    </Table>
  );
};
