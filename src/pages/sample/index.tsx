import ChakuraButton from "@/components/atoms/ChakuraButton";
import Layout from "@/components/Layout";
import { ReactElement } from "react";
import { useQuery } from "urql";
import { gql } from "graphql-tag";

export default function Page() {
  // const queryTest = gql`
  //   query ExampleQuery($ids: [Float!]!) {
  //     fetchUsersByIds(ids: $ids) {
  //       id
  //       name
  //     }
  //   }
  // `;
  // const [result] = useQuery({
  //   query: queryTest,
  //   variables: {
  //     ids: [1, 2],
  //   },
  // });

  return (
    <div>
      <ChakuraButton>chakura button</ChakuraButton>
      {/* {result.data && alert(result.data.fetchUsersByIds[1].id)} */}
    </div>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
