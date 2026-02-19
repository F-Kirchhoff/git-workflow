import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Layout from "./components/Layout";

function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <Layout>
      <Counter
        count={count}
        onDecrement={handleDecrement}
        onIncrement={handleIncrement}
      />
    </Layout>
  );
}

export default App;
