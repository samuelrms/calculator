import styled from "styled-components";
import { ButtonDefault } from "../Button/styled";
import { Container } from "../DisplayCalculator/styled";

export const MensagemCalc = styled(Container)``;

export const ContainerCalculator = styled(Container)`
  background-color: #6d6d6d;
  display: flex;
  flex-direction: column;
`;

export const ContentCalculator = styled.div`
  border: 3px #000 solid;
  border-radius: 5px;
  width: 75%;
  padding: 4rem 1rem 1rem;
  margin-bottom: 3rem;
  position: relative;
`;

export const ButtonClosed = styled(ButtonDefault)`
  height: 35px;
  position: absolute;
  width: 35px;
  border-radius: 50%;
  right: 10px;
  top: 10px;
`;
export const ButtonMinimize = styled(ButtonClosed)`
  right: 60px;
  font-weight: 900;
  font-size: 1rem;
`;
