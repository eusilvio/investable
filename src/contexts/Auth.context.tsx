import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import api from "../services/api";

const AuthContext = createContext({
  signed: false,
  user: {} as any,
  signIn: async function (data: any) {},
  signUp: async function (data: any) {},
  signOut: function () {},
  loading: false,
  loaderInvestiments: async function () {},
  loaderInvestimentsAplly: async function (): Promise<any> {},
});

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    api.addRequestTransform((request) => {
      setLoading(true);
    });
    api.addResponseTransform((response) => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = localStorage.getItem("@investable:user");

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      } else if (!storageUser) {
        setLoading(false);
      }
    }

    loadStorageData();
  }, []);

  async function signUp(data: any) {
    let obj: any = {};
    data.forEach((step: any) => {
      obj = { ...obj, [step.field.id]: step.data };
      obj.email = `${obj.name.toLowerCase().trim()}@email.com.br`;
      obj.cpf = `357.424.128-02`;
      obj.rg = `12.569.054-5`;
    });

    const response = await api.post("/user", obj);
    setUser(response.data);

    history.push("/home");
    localStorage.setItem("@investable:user", JSON.stringify(response.data));
  }

  async function signIn(data: any) {
    const response = (await api.get("/user", {
      q: `name:${data.email}`,
    })) as any;
    setUser(response.data[0]);

    history.push("/home");
    localStorage.setItem("@investable:user", JSON.stringify(response.data[0]));
  }

  function signOut() {
    localStorage.clear();
    setUser(null);
    history.push("/start");
  }

  async function loaderInvestiments() {
    const response = await api.get("/investiments", { q: "type:cdb" });
    return response.data as any;
  }

  async function loaderInvestimentsAplly(): Promise<any> {
    const response = await Promise.all([
      await api.get("/investiments", { q: "type:cdb", limit: 3 }),
      await api.get("/investiments", { q: "type:*Renda*" }),
    ]);

    const [
      { data: investimentsCDBs },
      { data: categories },
    ] = response as any[];

    return {
      investimentsCDBs,
      categories,
    };
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signUp,
        signOut,
        loading,
        loaderInvestiments,
        loaderInvestimentsAplly,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
