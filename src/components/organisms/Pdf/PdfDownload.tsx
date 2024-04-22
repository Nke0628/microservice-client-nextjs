import dynamic from "next/dynamic";
import { graphql } from "../../../gql/gql";
import { useQuery } from "urql";
import PDF from "./Pdf";

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  {
    ssr: false,
  }
);

// ブラウザ表示
// const PDFViewer = dynamic(
//   () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
//   {
//     ssr: false,
//   }

const EXAMPLE_QUERY_DOCUMENT = graphql(/* GraphQL */ `
  query pdfQuery($ids: [Float!]!, $userType: [UserType!]!) {
    fetchUsersByIds(ids: $ids, userType: $userType) {
      id
      userType
      ...UserItem
    }
  }
`);

type PdfDownloadProps = {};

export const PdfDownload: React.FC<PdfDownloadProps> = (props) => {
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
      <PDFDownloadLink
        document={<PDF id={Number(data?.fetchUsersByIds[1].id) ?? 0} />}
        fileName="somename.pdf"
      >
        {({ loading }) => (loading ? "Loading document..." : "Download now!")}
      </PDFDownloadLink>
    </div>
  );
};
