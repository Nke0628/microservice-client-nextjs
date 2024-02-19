import ChakuraButton from "@/components/atoms/ChakuraButton";
import Layout from "@/components/Layout";
import { ReactElement } from "react";
import { useQuery } from "urql";

export default function Page() {
  // const queryTest = `
  //   query login {
  //     getjwt {
  //       jwt
  //     }
  //   }
  // `;
  // const [result] = useQuery({
  //   query: queryTest,
  // });

  return (
    <div>
      <ChakuraButton>chakura button</ChakuraButton>
      {/* {result.data && alert(result.data.jwt)} */}
    </div>
  );
}

// Page.getLayout = function getLayout(page: ReactElement) {
//   return <Layout>{page}</Layout>;
// };
