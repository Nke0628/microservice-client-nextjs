import { Thead, Tr, Td } from "@chakra-ui/react";
import { PositionLayer, PositionLayerNameMap } from "@/types/position-layer";

type ExampleTableRowProps = {
  id: number;
  positionLayer: PositionLayer;
  inputFlg: boolean;
  theme: string;
  charNum: number;
};

export const ExampleTableRow: React.FC<ExampleTableRowProps> = ({
  id,
  positionLayer,
  inputFlg,
  theme,
  charNum,
}) => {
  return (
    <Thead>
      <Tr>
        <Td>{id}</Td>
        <Td>{PositionLayerNameMap[positionLayer]}</Td>
        <Td>{inputFlg ? "有" : "無"}</Td>
        <Td>{theme}</Td>
        <Td>{charNum}</Td>
      </Tr>
    </Thead>
  );
};
