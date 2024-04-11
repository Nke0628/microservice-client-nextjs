import { Heading, HStack, Stack, Text } from "@chakra-ui/react";

type ChildChakra2Props = {};

export const ChildChakra2: React.FC<ChildChakra2Props> = (props) => {
  return (
    <Stack backgroundColor={"green"} spacing={0}>
      <Heading size={"md"}>セクション1</Heading>
      <HStack spacing={2.5}>
        <Text>タイトル</Text>
        <Text>内容</Text>
        <Text noOfLines={1}>
          "The quick brown fox jumps over the lazy dog" is an English-language
          pangram—a sentence that contains all of the letters of the English
          alphabet. Owing to its existence, Chakra was created.
        </Text>
      </HStack>
    </Stack>
  );
};
