import Link from "next/link";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  return (
    <>
      <div>dynamic page id -{router.query.id}</div>
      <Link href="/sample">sample page</Link>
    </>
  );
}
