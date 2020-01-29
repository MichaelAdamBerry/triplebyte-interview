import React, { useState, useEffect } from "react";

export const Box = () => {
  const [bgIsRed, toggleBackground] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      toggleBackground();
    }, 5000);
  }, []);

  return (
    <>
      <div
        data-testid="box1"
        className="box"
        style={{ backgroundColor: bgIsRed ? "var(--dk-blu)" : "var(--dk-yl)" }}
      >
        <p>inner box</p>
      </div>
      <button onClick={() => toggleBackground(!bgIsRed)}>Change Color</button>
    </>
  );
};
