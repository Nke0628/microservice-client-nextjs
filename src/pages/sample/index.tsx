import ChakuraButton from "@/components/atoms/ChakuraButton";
import Layout from "@/components/Layout";
import { ReactElement } from "react";
import { useQuery } from "urql";
import { graphql } from "../../gql/gql";
import ReactSelect from "@/components/organisms/ReactSelect/ReactSelect";
import ModalFetch from "@/components/organisms/ModalFetch/ModalFetch";

export default function Page() {
  const queryTest = graphql(/* GraphQL */ `
    query ExampleQuery($ids: [Float!]!) {
      fetchUsersByIds(ids: $ids) {
        id
        name
      }
    }
  `);
  const [{ data }] = useQuery({
    query: queryTest,
    variables: {
      ids: [1, 2],
    },
  });

  return (
    <div>
      <ChakuraButton>chakura button</ChakuraButton>
      <p>{data?.fetchUsersByIds[1].name}</p>
      <ReactSelect></ReactSelect>
    </div>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
