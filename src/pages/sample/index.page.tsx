import ChakuraButton from "@/components/atoms/ChakuraButton";
import Layout from "@/components/Layout";
import { ReactElement } from "react";
import { useQuery } from "urql";
import { graphql } from "../../gql/gql";
import ReactSelect from "@/components/organisms/ReactSelect/ReactSelect";
import { CustomHook } from "@/components/organisms/CutomHook/CustomHook";

function Page() {
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
      <CustomHook></CustomHook>
    </div>
  );
}

Page.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Page;
