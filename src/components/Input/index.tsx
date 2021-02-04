import React, { InputHTMLAttributes } from "react";

import { Input as ItemInput, InputContainer, Label } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input(props: InputProps) {
  const { label, ...restProps } = props;
  return (
    <InputContainer>
      <ItemInput placeholder={" "} {...restProps} />
      <Label htmlFor={restProps.id}>{label}</Label>
    </InputContainer>
  );
}
