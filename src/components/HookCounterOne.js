import React, { useState, useEffect } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect = Updating docament title");
    document.title = `You clicked ${count} time`;
  }, [count]);

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>count {count}</button>
    </div>
  );
}

export default HookCounter;
