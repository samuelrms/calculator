import React, { useState } from "react";

const Calculator = () => {
  const [numberFirst, setNumberFirst] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const [checkOperator, setCheckOperator] = useState(false);
  const [checkOtherOperator, setCheckOtherOperator] = useState(true);
  const [firstClick, setFirstClick] = useState(false);
  const [firstCalc, setFirstCalc] = useState(false);
  const [calc, setCalc] = useState({
    firstNumber: "",
    operator: "",
    secondNumber: "",
    lastNumber: "",
  });

  return <div>Calculator</div>;
};

export default Calculator;
