import { useState } from "react";
import { ExampleTable } from "./ExampleTable";
import { ExampleTableSearchCondition } from "./ExampleTableSearchCondition";

export const ExampleTableArea: React.FC = (props) => {
  // TODO ExampleTableに検索条件として流す
  const [keyword, setKeyword] = useState<string>("");
  return (
    <>
      <ExampleTableSearchCondition
        onClickSearchButton={(value) => {
          setKeyword(value);
        }}
      ></ExampleTableSearchCondition>
      <ExampleTable></ExampleTable>
    </>
  );
};
