import React from "react";

import { LogoContainer, Image } from "./style";

import LogoImg from "../../assets/images/logo.png";

export default function LogoComponent() {
  return (
    <LogoContainer>
      <Image src={LogoImg} alt="Investable" />
      <h1>Investable</h1>
    </LogoContainer>
  );
}
