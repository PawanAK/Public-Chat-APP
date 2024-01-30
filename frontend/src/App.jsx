import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello, world!</h1>
      <p>
        <button onClick={() => setCount(count + 1)}>Click me</button>{" "}
        <span>You clicked {count} times</span>
      </p>
    </>
  );
}

export default App;
