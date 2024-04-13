import { useState } from "react";
import { ExampleTable } from "./ExampleTable";
import { ExampleTableSearchCondition } from "./ExampleTableSearchCondition";

export const ExampleTableArea: React.FC = (props) => {
  const [keyword, setKeyword] = useState<string>("");
  return (
    <>
      <ExampleTableSearchCondition
        onClickSearchButton={(value) => {
          setKeyword(value);
        }}
      ></ExampleTableSearchCondition>
      <ExampleTable keyword={keyword}></ExampleTable>
    </>
  );
};
