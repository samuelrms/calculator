import React, { useState } from "react";
import DisplayCalculator from "../DisplayCalculator/DisplayCalculator";
import Buttons from "../Buttons";
import { CloseCalculator, OpenCalculator, TextInitCalc } from "../Mooks/Value";
import { MensagemCalc } from "./styled";

const Calculator = () => {
  const [numberFirst, setNumberFirst] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operatorCalc, setOperatorCalc] = useState("");
  const [result, setResult] = useState("");
  const [checkOperator, setCheckOperator] = useState(false);
  const [checkOtherOperator, setCheckOtherOperator] = useState(true);
  const [firstClick, setFirstClick] = useState(false);
  const [firstCalc, setFirstCalc] = useState(false);
  const [renderCalculator, setRenderCalculator] = useState(false);
  const [calc, setCalc] = useState({
    firstNumber: "",
    operator: "",
    secondNumber: "",
    lastNumberCalc: "",
  });

  const getValues = (number) => {
    if (checkOperator === false) {
      if (firstCalc) {
        clearValue(number, true);
        setFirstCalc(false);
      }
      if (number === ".") {
        calc.firstNumber += number;
        setNumberFirst(numberFirst + number);
        calc.lastNumberCalc = "";
      } else if (number === "X") {
        setCalc({
          firstNumber: calc.firstNumber.slice(0, -1),
          operator: "",
          secondNumber: "",
        });
        setNumberFirst(numberFirst);
      } else {
        calc.firstNumber += number;
        setNumberFirst(numberFirst + number);
        calc.lastNumberCalc = "";
      }
    } else {
      if (number === ".") {
        calc.secondNumber += number;
        setSecondNumber(secondNumber + number);
      } else if (number === "X") {
        setCalc({
          firstNumber: calc.firstNumber,
          operator: calc.operator,
          secondNumber: calc.secondNumber.slice(0, -1),
        });
      } else {
        calc.secondNumber += number;
        setSecondNumber(secondNumber + number);
      }
    }
  };

  const getOperator = (number) => {
    calc["operator"] = number;
    setOperatorCalc(number);
    setCheckOperator(true);
    setCheckOtherOperator(false);
    if (firstClick) {
      setCalc({
        firstNumber: calc.lastNumberCalc,
        operator: calc.operator,
        secondNumber: "",
      });
      setNumberFirst(calc.lastNumberCalc);
      setSecondNumber("");
    }
    setFirstClick(true);
  };

  const renderOperation = (number) => {
    const operation = {
      "+": (firstNumber, secondNumber) =>
        parseFloat(firstNumber) + parseFloat(secondNumber),
      "-": (firstNumber, secondNumber) =>
        parseFloat(firstNumber) - parseFloat(secondNumber),
      "/": (firstNumber, secondNumber) =>
        parseFloat(firstNumber) / parseFloat(secondNumber),
      "%": (firstNumber, secondNumber) =>
        parseFloat(firstNumber) % parseFloat(secondNumber),
      "*": (firstNumber, secondNumber) =>
        parseFloat(firstNumber) * parseFloat(secondNumber),
    };
    let result = operation[calc["operator"]](
      calc.firstNumber,
      calc.secondNumber,
    );
    calc.lastNumberCalc = result;
    setResult(result);
    setCheckOtherOperator(true);
    setCheckOperator(false);
    setFirstCalc(true);
  };

  const clearValue = (number, newCalc) => {
    if (newCalc) {
      setCalc({
        firstNumber: number,
        operator: calc.operator,
        secondNumber: "",
      });
      setFirstClick(false);
      setResult("");
      setNumberFirst("");
      setSecondNumber("");
      setOperatorCalc("");
    } else {
      setCalc({
        firstNumber: "",
        operator: calc.operator,
        secondNumber: "",
      });
      setFirstClick(false);
      setResult("");
      setNumberFirst("");
      setSecondNumber("");
      setOperatorCalc("");
    }
  };

  const Err = () => {
    setResult("! Error ");
  };

  const Calc = (number) => {
    if (!isNaN(number) || number === "." || number === "X") {
      getValues(number);
    } else if (
      (number === "+" ||
        number === "-" ||
        number === "/" ||
        number === "*" ||
        number === "%") & checkOtherOperator
    ) {
      getOperator(number);
    } else if (number === "C") {
      clearValue();
    } else if (number === "=") {
      if (calc.secondNumber !== "") {
        renderOperation(number);
      } else {
        Err();
      }
    }
  };

  const numero2 = calc.secondNumber;
  const numero1 = calc.firstNumber;

  return (
    <div>
      {!renderCalculator && (
        <button onClick={() => setRenderCalculator(!renderCalculator)}>
          {OpenCalculator}
        </button>
      )}
      {renderCalculator && (
        <div>
          {numero1 === "" ? (
            <MensagemCalc>
              <p>{TextInitCalc}</p>
            </MensagemCalc>
          ) : (
            <DisplayCalculator
              result={result}
              firstNumber={numero1}
              secondNumber={numero2}
              operator={operatorCalc}
            />
          )}
          {console.log({ numero1, operatorCalc, numero2, result })}
          <Buttons calc={Calc} />
        </div>
      )}
      {renderCalculator && (
        <button onClick={() => setRenderCalculator(!renderCalculator)}>
          {CloseCalculator}
        </button>
      )}
    </div>
  );
};

export default Calculator;
