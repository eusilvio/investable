import React from "react";

import LogoComponent from "../../components/Logo";

import { useHistory } from "react-router-dom";

import Button from "../../components/Button";

import { Container, Content } from "./style";

export default function StartScreen() {
  const history = useHistory();

  function handleGoOpenAccount() {
    history.push("/open-account");
  }

  function handleGoLogin() {
    history.push("/login");
  }

  return (
    <Container>
      <Content>
        <LogoComponent />
        <h2>Investimentos não precisam ser complicados</h2>
        <Button onClick={handleGoOpenAccount}>Abra sua conta</Button>
        <Button clear={true} onClick={handleGoLogin}>
          Já possui uma conta? <strong>ENTRAR</strong>
        </Button>
      </Content>
    </Container>
  );
}
