import ChakuraButton from "@/components/atoms/ChakuraButton";
import Layout from "@/components/Layout";
import { useQuery } from "urql";
import { graphql } from "../../gql/gql";
import ReactSelect from "@/components/organisms/ReactSelect/ReactSelect";
import { CustomHook } from "@/components/organisms/CutomHook/CustomHook";
import { ExampleTableArea } from "@/components/organisms/ExampleTable/ExampleTableArea";
import { Fragment } from "@/components/organisms/Fragment/Fragment";
import { ReactElement } from "react";

function Page() {
  const queryTest = graphql(/* GraphQL */ `
    query ExampleQuery($ids: [Float!]!) {
      fetchUsersByIds(ids: $ids) {
        id
        ...UserItem
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
      <p>{data?.fetchUsersByIds[1].id}</p>
      <ReactSelect></ReactSelect>
      <CustomHook></CustomHook>
      <ExampleTableArea></ExampleTableArea>
      {data?.fetchUsersByIds.map((data2) => {
        return <Fragment query={data2}></Fragment>;
      })}
    </div>
  );
}

Page.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Page;
