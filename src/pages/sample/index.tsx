import ChakuraButton from "@/components/atoms/ChakuraButton";
import { useQuery } from "urql";

export default function Page() {
  const queryTest = `
    query login {
      login {
        jwt
      }
    }
  `;
  const [result] = useQuery({
    query: queryTest,
  });

  return (
    <div>
      <ChakuraButton>chakura button</ChakuraButton>
      {result.data && alert(result.data.jwt)}
    </div>
  );
}
