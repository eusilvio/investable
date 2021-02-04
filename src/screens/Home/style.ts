import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  height: 60px;
  text-align: center;
  display: flex;
  place-content: center;
  align-items: center;
  box-shadow: 1px 0 3px #383146;
  h1 {
    font-size: 16px;
  }
`;

export const Content = styled.div`
  flex: 1;
  overflow-y: scroll;
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

export const User = styled.div`
  margin: 31px 0;
`;
export const Picture = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background: linear-gradient(#e43959, #ec584c);
  box-shadow: 1px 0 3px #00000033;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 40px;
    font-weight: bold;
  }
`;
export const Name = styled.h3`
  text-align: center;
  margin: 20px auto;
  font-size: 24px;
`;

export const NivelBar = styled.span`
  height: 100%;
  width: 100%;
`;

export const NivelContent = styled.div`
  h3 {
    text-align: center;
    margin: 17px 0;
    font-weight: normal;
    font-size: 16px;
  }
`;

export const Nivel = styled.div`
  width: 100%;
  height: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  ${NivelBar} {
    &:first-child {
      background: #ec584c;
      border-radius: 4px 0 0px 4px;
    }
    &:nth-child(2) {
      background: #e84952;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        left: calc(50% - 10px);
        top: 20px;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid #e84952;
        clear: both;
      }
    }
    &:last-child {
      background: #e43959;
      border-radius: 0 4px 4px 0;
    }
  }
`;

export const Investiments = styled.div`
  h3 {
    text-align: center;
    font-size: 18px;
    font-weight: normal;
    margin: 20px 0;
  }
`;

export const Investiment = styled.div`
  background: #595364;
  padding: 15px;
  margin-bottom: 13px;
  border-radius: 4px;
  box-shadow: 0 1px 3px #00000033;
`;

export const InvestimentTitle = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const InvestimentInfo = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;
