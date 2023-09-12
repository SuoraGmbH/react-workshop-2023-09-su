import { useState } from "react";
import DateCounta from "./DateCounta";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: "1px solid pink" }}>
      <p>Zählerstand: {count}</p>
      <button
        onClick={() => {
          setCount(() => count + 1);
        }}
      >
        Erhöhen
      </button>

      <DateCounta />
    </div>
  );
};

export default Counter;
