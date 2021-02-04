import React, { ButtonHTMLAttributes } from "react";

import { Button as Btn } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  clear?: boolean;
}

export default function Button(props: ButtonProps) {
  const { clear, children, ...restProps } = props;

  if (clear)
    return (
      <Btn className="clear" {...restProps}>
        {children}
      </Btn>
    );

  return <Btn {...restProps}>{children}</Btn>;
}
