import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";

import LogoComponent from "../../components/Logo";
import api from "../../services/api";

import { Container } from "./style";

export default function SplashScreen() {
  const history = useHistory();

  useEffect(() => {
    const loader = async () => {
      await api.get("");
      history.push("/start");
    };
    loader();
  }, [history]);

  return (
    <Container>
      <LogoComponent />
    </Container>
  );
}
