import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  //   console.log(count);
  function handelAdd() {
    const newCount = count + 1;
    setCount(newCount);
  }
  function handelReduce() {
    const newCount = count - 1;
    setCount(newCount);
  }

  return (
    <div style={{ border: "2px solid red", padding: "20px", margin: "20px" }}>
      <h3>Counter:{count} </h3>
      <button onClick={handelAdd}>Add</button>
      <button onClick={handelReduce}>Reduce</button>
    </div>
  );
}
