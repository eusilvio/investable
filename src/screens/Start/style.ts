import styled from "styled-components";

export const Container = styled.div`
  padding: 60px 20px 0 20px;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  margin: 0 auto;

  h2 {
    text-align: center;
    margin: 60px auto;
    letter-spacing: 0.19px;
    width: 80%;
  }
`;
