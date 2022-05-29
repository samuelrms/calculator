import React from "react";
import Button from "../Button/Button";
import { Numebers, OperatorsRight, OperatorsTop } from "../Mooks/Value";
import {
  Container,
  ContentNumbers,
  ContentRight,
  ContentTop,
  ContentWraper,
} from "./styled";

const Buttons = (props) => {
  const getValueClick = (e) => props.calc(e.target.value);
  return (
    <Container>
      <ContentWraper>
        <ContentTop>
          {OperatorsTop.map((operator) => (
            <Button value={operator} key={operator} onClick={getValueClick}>
              {operator}
            </Button>
          ))}
        </ContentTop>
        <ContentNumbers>
          {Numebers.map((number) => (
            <Button
              title={number}
              value={number}
              key={number}
              onClick={getValueClick}
            >
              {number}
            </Button>
          ))}
        </ContentNumbers>
      </ContentWraper>
      <ContentRight>
        {OperatorsRight.map((operator) => (
          <Button
            buttonDefaultWidth="calc(100% - 4px)"
            title={operator}
            value={operator}
            key={operator}
            onClick={getValueClick}
          >
            {operator}
          </Button>
        ))}
      </ContentRight>
    </Container>
  );
};

export default Buttons;
