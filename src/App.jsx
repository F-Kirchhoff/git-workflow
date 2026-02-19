import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Layout from "./components/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Counter count={count} setCount={setCount} />
    </Layout>
  );
}

export default App;
