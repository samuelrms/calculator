import React from "react";

const DisplayCalculator = ({ props }) => {
  return (
    <div>
      <p>
        {props.firstNumber} {props.operator} {props.secondNumber}
      </p>
      <p>{props.result}</p>
    </div>
  );
};

export default DisplayCalculator;
