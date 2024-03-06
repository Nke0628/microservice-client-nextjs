import { Thead, Tr, Th } from "@chakra-ui/react";

export const ExampleTableHeader: React.FC = (props) => {
  return (
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>役職層</Th>
        <Th>入力有無</Th>
        <Th>テーマ</Th>
        <Th>文字数</Th>
      </Tr>
    </Thead>
  );
};
