import ChakuraButton from "@/components/atoms/ChakuraButton";
import Layout from "@/components/Layout";
import { useQuery } from "urql";
import { graphql } from "../../gql/gql";
import ReactSelect from "@/components/organisms/ReactSelect/ReactSelect";
import { CustomHook } from "@/components/organisms/CutomHook/CustomHook";
import { ExampleTableArea } from "@/components/organisms/ExampleTable/ExampleTableArea";
import { Fragment } from "@/components/organisms/Fragment/Fragment";
import { ReactElement, useState } from "react";
import { useLoginUser } from "@/store/LoginUserProvider";
import { Chakra } from "@/components/organisms/Chakra/Chakra";

// サンプルデータドキュメント
const EXAMPLE_QUERY_DOCUMENT = graphql(/* GraphQL */ `
  query ExampleQuery($ids: [Float!]!, $userType: [UserType!]!) {
    fetchUsersByIds(ids: $ids, userType: $userType) {
      id
      userType
      ...UserItem
    }
  }
`);

// サンプルページ
function Page() {
  // LoginUserの取得
  const loginUser = useLoginUser();

  // サンプルデータ取得
  const [{ data }] = useQuery({
    query: EXAMPLE_QUERY_DOCUMENT,
    variables: {
      ids: [1, 2],
      userType: [],
    },
  });

  return (
    <div>
      {/* チャクラUIの例 */}
      <ChakuraButton>chakura button</ChakuraButton>

      {/* データ取得結果の例 */}
      <p>{data?.fetchUsersByIds[1].id}</p>

      {/* フラグメントの例 */}
      {data?.fetchUsersByIds.map((data) => {
        return <Fragment key={data.id} query={data}></Fragment>;
      })}

      {/* reactSelectの例 */}
      <ReactSelect></ReactSelect>

      {/* カスタムフックを利用した例 */}
      <CustomHook></CustomHook>

      {/* テーブル例 */}
      <ExampleTableArea></ExampleTableArea>

      {/* コンテキストの例 */}
      <div>
        {loginUser.id}
        {loginUser.name}
      </div>

      {/* ChakraUIの例 */}
      <Chakra></Chakra>
    </div>
  );
}

Page.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Page;
