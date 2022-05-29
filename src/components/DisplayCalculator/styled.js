import styled from "styled-components";

export const Container = styled.div`
  max-width: 80%;
  background: #e35;
  border-radius: 5px;
  padding: 30px 15px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RenderNumbers = styled.h2`
  font-size: 2rem;
`;

export const RenderResult = styled(RenderNumbers)`
  margin-left: 3rem;
`;

export const RenderOperator = styled(RenderNumbers)`
  margin: 0 0.5rem;
`;
