import { Button, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";

type ExampleTableSearchConditionProps = {
  onClickSearchButton: (keyword: string) => void;
};

export const ExampleTableSearchCondition: React.FC<
  ExampleTableSearchConditionProps
> = ({ onClickSearchButton }) => {
  const [keyword, setKeyword] = useState<string>("");
  const handleClickSearchButton = () => {
    onClickSearchButton(keyword);
  };
  return (
    <VStack align={"flex-start"}>
      <Input
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        placeholder="キーワード"
      />
      <Button onClick={handleClickSearchButton}>検索</Button>
    </VStack>
  );
};
