export default function Layout({ sidebar, children }) {
  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "24px auto",
        padding: "0 20px",
        display: "grid",
        gridTemplateColumns: "320px 1fr",
        gap: 24,
      }}
    >
      <aside>{sidebar}</aside>
      <section>{children}</section>
    </div>
  );
}
