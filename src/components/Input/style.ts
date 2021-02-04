import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  & + div {
    margin-top: 30px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 56px;
  padding: 0 18px;
  border-radius: 4px;
  border: 1px solid #fff;
  background: transparent;
  transition: border 0.2s;
  color: #fff;
  &::placeholder {
    color: #fff;
  }
  &:focus {
    border: 2px solid #ec584c;
    & + label {
      top: -0.5rem;
      background: #383047;
    }
  }
 
  &:not(:placeholder-shown) + label {
    top: -0.5rem;
    background: #383047;
  }
`;

export const Label = styled.label`
  position: absolute;
  left: 1rem;
  top: 1.1rem;
  padding: 0 0.25rem;
  transition: 0.2s;
`;
