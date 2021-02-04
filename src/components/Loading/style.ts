import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 9999;
  background: rgba(48, 40, 61, 0.9);
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  h1 {
    font-size: 25px;
    margin: 16px 0;
  }
`;
