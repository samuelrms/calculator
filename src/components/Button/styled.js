import styled from "styled-components";

export const ButtonDefault = styled.button`
  background: ${({ title, buttonDefaultBackground }) =>
    title === "C" ? "#793B3B" : buttonDefaultBackground};
  color: #fff;
  cursor: pointer;
  margin: 2px;
  height: 40px;
  width: ${({ buttonDefaultWidth }) => buttonDefaultWidth};
  border-radius: 5px;
  transition: 0.5s ease-in-out;
  :last-child {
    width: ${({ title }) => title === "=" && "calc(100% / .5 - 4px)"};
    background: ${({ title }) => title === "=" && "#6F9C78"};
  }
  :hover {
    background: ${({ hoverButtonDefault }) => hoverButtonDefault};
  }
`;

ButtonDefault.defaultProps = {
  buttonDefaultWidth: "calc(100% / 3 - 4px)",
  hoverButtonDefault: "#AB82BA",
  buttonDefaultBackground: "#1d1d1d",
};
