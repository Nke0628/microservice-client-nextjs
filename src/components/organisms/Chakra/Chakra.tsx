import { Stack } from "@chakra-ui/react";
import { ChildChakra1 } from "./ChildChakra1";
import { ChildChakra2 } from "./ChildChakra2";
import { useState } from "react";
import { SegmentControl } from "@/components/molecules/SegmentControl";

type ChakraProps = {};

export const Chakra: React.FC<ChakraProps> = (props) => {
  const options = [
    { value: "department", label: "部署" },
    { value: "employee", label: "従業員" },
    { value: "both", label: "部署と従業員" },
  ];
  const [value, setValue] = useState("department");
  return (
    <Stack backgroundColor={"skyblue"} spacing={0}>
      <ChildChakra1></ChildChakra1>
      <ChildChakra2></ChildChakra2>
      <SegmentControl
        options={options}
        value={value}
        onClickOption={(value) => {
          setValue(value);
        }}
      ></SegmentControl>
    </Stack>
  );
};
