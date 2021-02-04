import React, { useContext } from "react";
import AuthContext from "../../contexts/Auth.context";

import LogoImage from "../../assets/images/logo.png";

import { Container } from "./style";

export default function Loading() {
  const { loading } = useContext(AuthContext);

  if (!loading) return <></>;

  return (
    <Container>
      <img src={LogoImage} alt="Investable" />
      <h1>Carregando...</h1>
    </Container>
  );
}
