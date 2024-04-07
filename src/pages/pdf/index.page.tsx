"use client";

import PDF from "@/components/organisms/Pdf/Pdf";
import dynamic from "next/dynamic";
import { graphql } from "../../gql/gql";
import { useQuery } from "urql";

// PDFダウンロード
const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

// WEB閲覧
const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
  }
);

// サンプルデータQUERYドキュメント
const EXAMPLE_QUERY_DOCUMENT = graphql(/* GraphQL */ `
  query pdfQuery($ids: [Float!]!, $userType: [UserType!]!) {
    fetchUsersByIds(ids: $ids, userType: $userType) {
      id
      userType
      ...UserItem
    }
  }
`);

export default function Home() {
  // サンプルデータ取得
  const [{ data }] = useQuery({
    query: EXAMPLE_QUERY_DOCUMENT,
    variables: {
      ids: [1, 2],
      userType: [],
    },
  });

  return (
    // <div>
    //   <PDFDownloadLink
    //     document={<PDF id={Number(data?.fetchUsersByIds[1].id) ?? 0} />}
    //     fileName="somename.pdf"
    //   >
    //     {({ loading }) => (loading ? "Loading document..." : "Download now!")}
    //   </PDFDownloadLink>
    // </div>
    <div
      style={{
        height: "100vh",
      }}
    >
      <PDFViewer width="100%" height="100%">
        <PDF id={1} />
      </PDFViewer>
    </div>
  );
}
