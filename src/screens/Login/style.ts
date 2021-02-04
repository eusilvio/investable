import styled from "styled-components";

const SocialButtonColors: { [x: string]: string } = {
  facebook: "#3C5A99",
  google: "#FFF",
  twitter: "#1DA1F2",
};

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;

`;

export const Header = styled.div`
  height: 60px;
  text-align: center;
  display: flex;
  place-content: center;
  align-items: center;
  box-shadow: 1px 0 3px #383146;
  padding: 0 20px;
  h1 {
    font-size: 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 0 20px;
  form {
    width: 100%;
    a {
      cursor: pointer;
      display: block;
      text-align: right;
      margin-top: 5px;
      margin-bottom: 20px;
      font-size: 12px;
      letter-spacing: 0.11pt;
      line-height: 24px;
    }
  }
`;

export const BackButton = styled.a`
  cursor: pointer;
`;

export const ScreenTitle = styled.h1`
  font-size: 18px;
  text-transform: uppercase;
  margin: 0 auto;
`;

export const SocialLoginContent = styled.div`
  margin-top: 40px;
  text-align: center;
  h2 {
    font-size: 20px;
    letter-spacing: 0.11px;
  }
`;

export const SocialLoginButtonsContent = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 50px;
  align-items: end;
`;

export const SocialButton = styled.button<{ network: string }>`
  margin: 0 auto;
  display: flex;
  align-items: center;
  place-content: center;
  width: 70px;
  height: 70px;
  border-radius: 4px;
  border: 0;
  box-shadow: 0 1pt 3px #00000033;
  background-color: ${(props) => SocialButtonColors[props.network]};
`;
