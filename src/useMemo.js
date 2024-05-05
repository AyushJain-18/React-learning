import React, { useState, useMemo } from "react";

const MemoizedFunctionResult = (props) => {
  // Simulating a heavy computation
  const calculateResult = () => {
    console.log("Calculating result started...", props.number);
    let result = 0;
    for (let i = 0; i < 1000; i++) {
      result += i;
    }
    console.log("Calculating result finished...", props.number);
    result += props.mnumber;
    return result;
  };

  // Memoized result of the expensive calculation
  const memoizedResult = useMemo(() => calculateResult(), [props.number]);

  return <div>Memoized Result: {memoizedResult}</div>;
};

export default MemoizedFunctionResult;
