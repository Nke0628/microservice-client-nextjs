export default function Layout({ children }: { children: React.ReactNode }) {
  // NOTE ここでデータfetchも可能
  return (
    <>
      <header>レイアウト</header>
      <main>{children}</main>
      <footer>レイアウト</footer>
    </>
  );
}
