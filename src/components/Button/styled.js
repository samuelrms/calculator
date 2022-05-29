import styled from "styled-components";

export const ButtonDefault = styled.button`
  background: #1d1d1d;
  color: #fff;
  cursor: pointer;
  margin: 2px;
  height: 40px;
  width: ${({ buttonDefaultWidth }) => buttonDefaultWidth};
  border-radius: 5px;
  :last-child {
    width: ${({ title }) => title === "=" && "calc(100% / 1.5 - 4px)"};
  }
`;

ButtonDefault.defaultProps = {
  buttonDefaultWidth: "calc(100% / 3 - 4px)",
};
