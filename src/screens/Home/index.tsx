import React, { useContext, useEffect, useState } from "react";

import TabsComponent from "../../components/Tabs";
import AuthContext from "../../contexts/Auth.context";

import {
  Container,
  Header,
  Content,
  User,
  Picture,
  Name,
  NivelContent,
  Nivel,
  NivelBar,
  Investiments,
  Investiment,
  InvestimentTitle,
  InvestimentInfo,
} from "./style";

export default function HomeScreen() {
  const [investiments, setInvestiments] = useState([]);

  const { user, loaderInvestiments } = useContext(AuthContext);

  useEffect(() => {
    const loader = async () => {
      const investimentsData = await loaderInvestiments();
      setInvestiments(investimentsData as any);
    };
    loader();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header>
        <h1>HOME</h1>
      </Header>
      <Content>
        <User>
          <Picture>
            <h2>{user?.name[0]}</h2>
          </Picture>
          <Name>{user?.name}</Name>
        </User>
        <NivelContent>
          <Nivel>
            <NivelBar></NivelBar>
            <NivelBar></NivelBar>
            <NivelBar></NivelBar>
          </Nivel>
          <h3>Intermediário</h3>
        </NivelContent>

        <Investiments>
          <h3>Com base no seu perfil sugerimos os seguintes produtos</h3>
          {investiments.map((investiment: any) => (
            <Investiment key={investiment._id}>
              <InvestimentTitle>
                <span>{investiment.type}</span>
                <span>Taxa</span>
              </InvestimentTitle>
              <InvestimentInfo>
                <span>{investiment.title}</span>
                <span>{investiment.rates}%</span>
              </InvestimentInfo>
            </Investiment>
          ))}
        </Investiments>
      </Content>
      <TabsComponent />
    </Container>
  );
}
