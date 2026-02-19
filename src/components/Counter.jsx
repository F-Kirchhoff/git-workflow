export default function Counter({ count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
