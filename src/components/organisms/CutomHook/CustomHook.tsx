import { useCounter } from "@/hooks/uesCounter";

type CustomHookProps = {};

export const CustomHook: React.FC<CustomHookProps> = (props) => {
  const { count, setCount, incrementCount, decrementCount } = useCounter();
  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}>+1</button>
      <button onClick={decrementCount}>-1</button>
    </div>
  );
};
