
import React, { useContext, useEffect, useState } from "react";
import { IoArrowForward } from "react-icons/io5";

import TabsComponent from "../../components/Tabs";
import AuthContext from "../../contexts/Auth.context";

import {
  Container,
  Header,
  Content,
  Investiments,
  Investiment,
  InvestimentTitle,
  InvestimentInfo,
  ApplyInvestiment,
  ApllyName,
  ApllyInfo,
  ApplyTitle,
  ApllyDescription,
} from "./style";

export default function ApplyScreen() {
  const [recommended, setRecommended] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const { loaderInvestimentsAplly } = useContext(AuthContext);
  useEffect(() => {
    const loaderInvestiments = async () => {
      const data = await loaderInvestimentsAplly();

      setRecommended([...data.investimentsCDBs]);
      setCategories([...data.categories]);
    };

    loaderInvestiments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header>
        <h1>APLICAR</h1>
      </Header>
      <Content>
        <Investiments>
          <h3>Produtos recomendados para seu perfil</h3>
          {recommended.map((investiment) => (
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

          <h3>Escolha uma categoria de produtos para aplicar</h3>

          {categories.map((category) => (
            <ApplyInvestiment key={category._id}>
              <ApllyName>
                <span>{category.acronym}</span>
              </ApllyName>
              <ApllyInfo>
                <ApplyTitle>{category.type}</ApplyTitle>
                <ApllyDescription>{category.title}</ApllyDescription>
              </ApllyInfo>
              <IoArrowForward />
            </ApplyInvestiment>
          ))}
        </Investiments>
      </Content>
      <TabsComponent />
    </Container>
  );
}
