import styled from "styled-components";

export const ButtonDefault = styled.button`
  background: #1d1d1d;
  color: #fff;
  cursor: pointer;
  margin: 2px;
  width: ${({ buttonDefaultWidth }) => buttonDefaultWidth};
`;

ButtonDefault.defaultProps = {
  buttonDefaultWidth: "calc(100% / 3 - 4px)",
};
