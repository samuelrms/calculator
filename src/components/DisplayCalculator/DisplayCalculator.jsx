import React from "react";
import {
  Container,
  RenderNumbers,
  RenderOperator,
  RenderResult,
} from "./styled";

const DisplayCalculator = (props) => {
  return (
    <Container>
      <RenderNumbers>{props.firstNumber}</RenderNumbers>
      <RenderOperator>{props.operator}</RenderOperator>
      <RenderNumbers>{props.secondNumber}</RenderNumbers>
      {typeof props.result === typeof 0 && (
        <>
          <RenderResult>=</RenderResult>
          <RenderResult>{props.result}</RenderResult>
        </>
      )}
    </Container>
  );
};

export default DisplayCalculator;
