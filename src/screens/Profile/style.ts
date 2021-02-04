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
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
`;

export const User = styled.div`
  margin: 31px 0;
  display: flex;
  justify-content: space-between;
`;
export const Picture = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  background: linear-gradient(#e43959, #ec584c);
  box-shadow: 1px 0 3px #00000033;

  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 30px;
    font-weight: bold;
  }
  @media only screen and (max-width: 600px) {
    margin: 0 auto;
  }
`;
export const Name = styled.h3`
  text-align: left;
  margin: 10px 0 15px 0;
  font-size: 24px;
`;

export const UserInfo = styled.div`
  margin-right: auto;
  margin-left: 15px;
`;

export const UserType = styled.div`
  font-size: 12px;
  color: #e84952;
  strong {
    font-size: 14px;
    font-weight: bold;
  }
`;

export const UserData = styled.div`
  h3 {
    text-align: left;
    font-size: 14px;
    font-weight: normal;
    margin: 20px 0 15px 0;
    padding-bottom: 9px;
    border-bottom: 2px solid #5a5465;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Field = styled.div`
  margin-top: 15px;
`;
export const Label = styled.p`
  font-size: 12px;
  font-weight: normal;
`;
export const Value = styled.p`
  font-size: 16px;
  margin-top: 5px;
  font-weight: bold;
`;

export const ButtonSetting = styled.button`
  background: #595364;
  border: 0;
  padding: 15px;
  margin-bottom: 5px;
  border-radius: 4px;
  box-shadow: 0 1px 3px #00000033;
  width: 100%;
  font-size: 16px;
  color: #fff;
  text-align: left;
`;

export const SwitchSetting = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #595364;
  border: 0;
  padding: 15px;
  margin-bottom: 5px;
  border-radius: 4px;
  box-shadow: 0 1px 3px #00000033;
  font-size: 16px;
  color: #fff;
  text-align: left;
`;
export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 32px;
  height: 16px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #30283d;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 12px;
    width: 12px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 34px;
    background: #595364;
  }

  input:checked + .slider {
    background-color: #e43959;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #e43959;
  }

  input:checked + .slider:before {
    transform: translateX(16px);
  }
`;

export const Footer = styled.footer`
  margin: 30px 0;
`;
