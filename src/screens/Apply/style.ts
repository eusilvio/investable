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
  overflow-y: scroll;
  flex: 1;
  padding: 0 20px;
`;

export const Investiments = styled.div`
  max-width: 700px;
  margin: 0 auto;
  h3 {
    text-align: left;
    font-size: 14px;
    font-weight: normal;
    margin: 20px 0 15px 0;
    padding-bottom: 9px;
    border-bottom: 2px solid #5a5465;
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

export const ApplyInvestiment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #5a5465;
  padding-bottom: 22px;
  & + div {
    padding-top: 22px;
  }
  &:last-child {
    border: 0;
  }
`;

export const ApllyName = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  border: 2px solid #e43959;
  color: #e43959;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ApllyInfo = styled.div`
  margin-right: auto;
  margin-left: 10px;
`;

export const ApplyTitle = styled.div`
  color: #e43959;
  font-size: 14px;
  margin-bottom: 3px;
`;
export const ApllyDescription = styled.div``;
