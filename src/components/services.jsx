import React, { useState } from "react";

function Services() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ height: 500 }}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Services;
