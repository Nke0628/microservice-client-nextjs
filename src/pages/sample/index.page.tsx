import ChakuraButton from "@/components/atoms/ChakuraButton";
import Layout from "@/components/Layout";
import { useQuery, useClient } from "urql";
import { graphql } from "../../gql/gql";
import ReactSelect from "@/components/organisms/ReactSelect/ReactSelect";
import { CustomHook } from "@/components/organisms/CutomHook/CustomHook";
import { ExampleTableArea } from "@/components/organisms/ExampleTable/ExampleTableArea";
import { Fragment } from "@/components/organisms/Fragment/Fragment";
import { ReactElement, useRef, useState } from "react";
import { useLoginUser } from "@/store/LoginUserProvider";
import { Chakra } from "@/components/organisms/Chakra/Chakra";
import dayjs from "@/utils/dayjs";
import WithSample from "@/components/organisms/WithSample/WithSample";
import { Button } from "@chakra-ui/react";

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

// CSVエクスポートドキュメント
const CSV_EXPORT_QUERY_DOCUMENT = graphql(/* GraphQL */ `
  query CsvExportQuery {
    csvExport {
      csv
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

  // CSVエクスポート処理
  const gqlClient = useClient();
  const downloadCSV = async (filename: string): Promise<void> => {
    const result = await gqlClient.query(CSV_EXPORT_QUERY_DOCUMENT, {});
    const blob = new Blob([Buffer.from(result.data?.csvExport.csv, "base64")], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.click();
  };

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

      {/* Day.jsの例 */}
      <p>{dayjs("2024-05-05").toString()}</p>
      <p>{dayjs("2024-05-05").toISOString()}</p>
      <p>{dayjs("2024-05-05").format("YYYY-MM-DD")}</p>

      {/** CSVエクスポート */}
      <Button onClick={() => downloadCSV("sample.csv")}>csvダウンロード</Button>
    </div>
  );
}

const CompWithContext = WithSample(Page);

CompWithContext.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default CompWithContext;
