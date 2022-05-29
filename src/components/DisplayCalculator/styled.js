import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #000;
  background: #ab82ba;
  border-radius: 5px;
  padding: 15px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  height: 106px;
`;

export const RenderNumbers = styled.h2`
  font-size: 2rem;
`;

export const RenderResult = styled(RenderNumbers)`
  margin-top: 0;
`;

export const RenderOperator = styled(RenderNumbers)`
  margin: 0 0.5rem;
`;

export const WraperValues = styled.div`
  display: flex;
  align-items: center;
`;

export const WraperResults = styled(WraperValues)``;
