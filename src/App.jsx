import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Counter count={count} setCount={setCount} />
    </main>
  );
}

export default App;
