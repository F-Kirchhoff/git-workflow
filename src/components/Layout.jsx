export default function Layout({ children }) {
  return (
    <main>
      <header>My Cool Counter</header>
      {children}
      <footer>est. 2026</footer>
    </main>
  );
}
