import AsyncSelect from "react-select/async";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

type OptionsType = typeof options;

const fetchFunc = (inputValue: string) => {
  return new Promise<OptionsType>((resolve) => {
    setTimeout(() => {
      resolve(options);
    }, 100);
  });
};

const ReactSelect: React.FC = () => {
  return <AsyncSelect cacheOptions defaultOptions loadOptions={fetchFunc} />;
};

export default ReactSelect;
