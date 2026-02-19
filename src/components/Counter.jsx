export default function Counter({ count, onDecrement, onIncrement }) {
  return (
    <div>
      <button onClick={onDecrement}>Decrement</button>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}
