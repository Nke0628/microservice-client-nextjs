import { Stack } from "@chakra-ui/react";
import { ChildChakra1 } from "./ChildChakra1";
import { ChildChakra2 } from "./ChildChakra2";

type ChakraProps = {};

export const Chakra: React.FC<ChakraProps> = (props) => {
  return (
    <Stack backgroundColor={"skyblue"} spacing={0}>
      <ChildChakra1></ChildChakra1>
      <ChildChakra2></ChildChakra2>
    </Stack>
  );
};
