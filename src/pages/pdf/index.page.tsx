"use client";

import PDF from "@/components/organisms/Pdf/Pdf";
import dynamic from "next/dynamic";

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export default function Home() {
  return (
    <div>
      <PDFDownloadLink document={<PDF />} fileName="somename.pdf">
        {({ loading }) => (loading ? "Loading document..." : "Download now!")}
      </PDFDownloadLink>
    </div>
  );
}
