// src/components/Layout.jsx
export default function Layout({ sidebar, children }) {
  return (
    <div className="layout">
      <aside className="layout-aside">{sidebar}</aside>
      <section className="layout-main">{children}</section>
    </div>
  );
}
