import React, { useState } from "react";

const KikiIstDumm: React.FunctionComponent = () => {
  const [count, setCount] = useState(0);
  console.log("Kiki ist dumm rendert", count);
  setTimeout(() => {
    console.log("Setting State");
    setCount(1);
  }, 1);

  return <div>Diese Komponente beinhaltet eine Lüge</div>;
};

export default KikiIstDumm;
