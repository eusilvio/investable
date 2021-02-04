import React, { useContext } from "react";

import AuthContext from "../../contexts/Auth.context";

import Button from "../../components/Button";
import TabsComponent from "../../components/Tabs";

import Create from "../../assets/icons/create.svg";

import {
  Container,
  Header,
  Content,
  User,
  Picture,
  Name,
  UserInfo,
  UserType,
  UserData,
  Field,
  Label,
  Value,
  Footer,
  ButtonSetting,
  SwitchSetting,
  Switch,
} from "./style";

export default function ProfileScreen() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <Container>
      <Header>
        <h1>PERFIL</h1>
      </Header>
      <Content>
        <User>
          <Picture>
            <h2>{user?.name[0]}</h2>
          </Picture>
          <UserInfo>
            <Name>{user?.name}</Name>
            <UserType>
              <span>PERFIL DE RISCO:</span> <strong>Intermediário</strong>
            </UserType>
          </UserInfo>
        </User>

        <UserData>
          <h3>
            Dados Pessoais <img src={Create} alt="create-icon" />
          </h3>

          <Field>
            <Label>Email:</Label>
            <Value>{user?.name.toLowerCase()}@email.com.br</Value>
          </Field>
          <Field>
            <Label>CPF:</Label>
            <Value>{user?.cpf || "357.424.128-02"}</Value>
          </Field>
          <Field>
            <Label>RG:</Label>
            <Value>{user?.rg || "12.569.054-5"}</Value>
          </Field>
        </UserData>

        <UserData>
          <h3>
            Dados Bancários <img src={Create} alt="create-icon" />
          </h3>

          <Field>
            <Label>Banco:</Label>
            <Value>001 - Banco do Brasil</Value>
          </Field>
          <Field>
            <Label>Agência:</Label>
            <Value>1532</Value>
          </Field>
          <Field>
            <Label>Conta corrente:</Label>
            <Value>34521-2</Value>
          </Field>
        </UserData>

        <UserData>
          <h3>Segurança</h3>
          <ButtonSetting>Mudar de Senha</ButtonSetting>
          <ButtonSetting>Validar Token de Segurança</ButtonSetting>
        </UserData>

        <UserData>
          <h3>Segurança</h3>
          <SwitchSetting>
            Email
            <Switch>
              <input defaultChecked type="checkbox" />
              <span className="slider round"></span>
            </Switch>
          </SwitchSetting>

          <SwitchSetting>
            Push
            <Switch>
              <input type="checkbox" />
              <span className="slider round"></span>
            </Switch>
          </SwitchSetting>

          <SwitchSetting>
            SMS
            <Switch>
              <input type="checkbox" />
              <span className="slider round"></span>
            </Switch>
          </SwitchSetting>
        </UserData>

        <Footer>
          <Button onClick={signOut}>SAIR DO APLICATIVO</Button>
        </Footer>
      </Content>
      <TabsComponent />
    </Container>
  );
}
