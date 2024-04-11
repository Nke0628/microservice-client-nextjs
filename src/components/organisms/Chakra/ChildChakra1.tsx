import { HStack, Stack, Text } from "@chakra-ui/react";

type ChildChakra1Props = {};

export const ChildChakra1: React.FC<ChildChakra1Props> = (props) => {
  return (
    <Stack>
      {/* Hstackで幅いっぱい広げる */}
      <HStack spacing={2.5} backgroundColor={"bisque"}>
        <Text backgroundColor={"firebrick"} flexGrow={1}>
          タイトル
        </Text>
        <Text backgroundColor={"green"}>内容</Text>
      </HStack>
    </Stack>
  );
};
