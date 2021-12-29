import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Hello } from "../interface";

function App() {
  const x: Hello = { a: "a", b: 1 };
  const [num, setNum] = useState(0);
  return <div>hello, the</div>;
}

ReactDOM.render(<App />, document.getElementById("container"));
