import React, { useEffect, useState } from "react";

import { useHistory, useLocation } from "react-router-dom";

import Home from "../../assets/icons/home.svg";
import HomeActive from "../../assets/icons/home-active.svg";
import Chart from "../../assets/icons/build-chart.svg";
import ChartActive from "../../assets/icons/build-chart-active.svg";
import Person from "../../assets/icons/person.svg";
import PersonActive from "../../assets/icons/person-active.svg";

import { Tabs, TabButton, TabButtonIcon, TabButtonLabel } from "./style";

export default function TabsComponent() {
  const history = useHistory();
  const location = useLocation();

  const [screenActive, setScreenActive] = useState(location.pathname);

  useEffect(() => {
    setScreenActive(location.pathname);
  }, [location.pathname]);

  return (
    <Tabs>
      <TabButton
        className={screenActive.includes("home") ? "active" : ""}
        onClick={() => history.push("/home")}
      >
        <TabButtonIcon>
          {screenActive.includes("home") ? (
            <img src={HomeActive} alt="Pagina Home" />
          ) : (
            <img src={Home} alt="Pagina Home" />
          )}
        </TabButtonIcon>
        <TabButtonLabel>Home</TabButtonLabel>
      </TabButton>
      <TabButton
        className={screenActive.includes("aplly") ? "active" : ""}
        onClick={() => history.push("/aplly")}
      >
        <TabButtonIcon>
          {screenActive.includes("aplly") ? (
            <img src={ChartActive} alt="Pagina Aplicar" />
          ) : (
            <img src={Chart} alt="Pagina Aplicar" />
          )}
        </TabButtonIcon>
        <TabButtonLabel>Aplicar</TabButtonLabel>
      </TabButton>
      <TabButton
        className={screenActive.includes("profile") ? "active" : ""}
        onClick={() => history.push("/profile")}
      >
        <TabButtonIcon>
          {screenActive.includes("profile") ? (
            <img src={PersonActive} alt="Pagina Perfil" />
          ) : (
            <img src={Person} alt="Pagina Perfil" />
          )}
        </TabButtonIcon>
        <TabButtonLabel>Perfil</TabButtonLabel>
      </TabButton>
    </Tabs>
  );
}
