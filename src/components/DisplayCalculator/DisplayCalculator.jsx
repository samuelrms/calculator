import React from "react";
import {
  Container,
  RenderNumbers,
  RenderOperator,
  RenderResult,
  WraperResults,
  WraperValues,
} from "./styled";

const DisplayCalculator = (props) => {
  return (
    <Container>
      <WraperValues>
        <RenderNumbers>{props.firstNumber}</RenderNumbers>
        <RenderOperator>{props.operator}</RenderOperator>
        <RenderNumbers>{props.secondNumber}</RenderNumbers>
      </WraperValues>
      {typeof props.result === typeof 0 && (
        <RenderResult>{props.result}</RenderResult>
      )}
    </Container>
  );
};

export default DisplayCalculator;
