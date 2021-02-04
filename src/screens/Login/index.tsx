import React, { useContext, useState } from "react";

import { useHistory } from "react-router-dom";

import AuthContext from "../../contexts/Auth.context";

import Button from "../../components/Button";
import Input from "../../components/Input";

import {
  IoLogoFacebook,
  IoLogoGoogle,
  IoLogoTwitter,
  IoArrowBack,
} from "react-icons/io5";

import {
  Container,
  Content,
  Header,
  BackButton,
  ScreenTitle,
  SocialLoginContent,
  SocialLoginButtonsContent,
  SocialButton,
} from "./style";

export default function LoginScreen() {
  const history = useHistory();

  const { signIn } = useContext(AuthContext);

  const [dataLogin, setDataLogin] = useState<{
    email: string | null;
    password: string | null;
  }>({ email: null, password: null });

  async function handleOnLogin() {
    return signIn(dataLogin);
  }

  return (
    <Container>
      <Header>
        <BackButton onClick={() => history.goBack()}>
          <IoArrowBack size={27} />
        </BackButton>
        <ScreenTitle>Login</ScreenTitle>
      </Header>
      <Content>
        <form>
          <Input
            id="email"
            label="Email ou Nome"
            onChange={(e) =>
              setDataLogin({ ...dataLogin, email: e.target.value })
            }
          />
          <Input
            id="password"
            label="Senha"
            type="password"
            onChange={(e) =>
              setDataLogin({ ...dataLogin, password: e.target.value })
            }
          />
          <a href="/">Esqueci minha senha</a>
          <Button type="button" onClick={handleOnLogin}>
            Entrar
          </Button>
        </form>
        <SocialLoginContent>
          <h2>OU</h2>
          <SocialLoginButtonsContent>
            <SocialButton network="facebook">
              <IoLogoFacebook color="#FFF" size={36} />
            </SocialButton>
            <SocialButton network="google">
              <IoLogoGoogle color="#db4a39" size={36} />
            </SocialButton>
            <SocialButton network="twitter">
              <IoLogoTwitter color="#FFF" size={36} />
            </SocialButton>
          </SocialLoginButtonsContent>
        </SocialLoginContent>
      </Content>
    </Container>
  );
}
