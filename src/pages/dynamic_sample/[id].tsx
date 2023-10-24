import Link from "next/link";
import { useRouter } from "next/router";

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  return (
    <>
      <div>dynamic page id -{router.query.id}</div>
      <Link href="/sample">sample page</Link>
    </>
  );
}
