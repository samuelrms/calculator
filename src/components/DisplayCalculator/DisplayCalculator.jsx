import React from "react";
import { Container } from "./styled";

const DisplayCalculator = (props) => {
  return (
    <Container>
      <p>{props.firstNumber}</p>
      <p>{props.operator}</p>
      <p>{props.secondNumber}</p>
      <p>{props.result}</p>
    </Container>
  );
};

export default DisplayCalculator;
