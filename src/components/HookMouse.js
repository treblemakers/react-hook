import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, sety] = useState(0);

  const logMousePosition = e => {
    console.log(`Mouse event`);
    setX(e.clientX);
    sety(e.clientY);
  };

  useEffect(() => {
    console.log(`useEffect called`);
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("Component unmounting code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div>
      Hook x - {x} y - {y}
    </div>
  );
}

export default HookMouse;
