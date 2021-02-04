import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  border-radius: 4px;
  height: 56px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.15px;
  color: #fff;
  box-shadow: 0 1px 3px #00000033;
  background: linear-gradient(to left, #e43959, #ec584c);
  border: 0;
    & + button {
    margin-top: 20px;
  }

  &.clear {
    background: transparent !important;
    box-shadow: none;
    border: 1px solid #e43959;
    font-weight: normal;
    text-transform: none;
  }
  &:hover {
    background: linear-gradient(to right, #e43959, #ec584c);
  }
`;
