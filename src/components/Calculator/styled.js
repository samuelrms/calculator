import styled from "styled-components";
import { ButtonDefault } from "../Button/styled";
import { Container } from "../DisplayCalculator/styled";

export const MensagemCalc = styled(Container)`
  color: #ededed;
`;

export const ContainerCalculator = styled(Container)`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  border: none;
  align-items: center;
  padding: 15px 15px 45px;
  height: 100%;
`;

export const ContentCalculator = styled.div`
  border: 3px #000 solid;
  border-radius: 5px;
  width: 75%;
  padding: 4rem 1rem 1rem;
  position: relative;
  display: flex;
  justify-content: center;
  background: #7b5e86;
  animation: constructorCalculatorAnimation 0.5s both;
  @keyframes constructorCalculatorAnimation {
    from {
      opacity: 0;
      transform: translate3d(0, 60px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const ButtonClosed = styled(ButtonDefault)`
  height: 35px;
  position: absolute;
  width: 35px;
  border-radius: 50%;
  right: 10px;
  top: 10px;
  background: #793b3b;
`;
export const ButtonMinimize = styled(ButtonClosed)`
  right: 60px;
  font-weight: 900;
  font-size: 1rem;
  background: #6f9c78;
`;

export const BodyCalculator = styled.div`
  border: 4px solid #000;
  width: 80%;
  border-radius: 5px;
  padding: 10px;
  background: #bababa;
`;
