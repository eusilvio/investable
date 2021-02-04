import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100% !important;
  overflow: hidden;
  max-width: 700px;
  margin: 0 auto;
`;

export const Header = styled.header`
  padding: 0 20px;
  height: 60px;
  display: flex;
  align-items: center;
  top: 0;
  background: radial-gradient(#403850, #30283d);
`;

export const BackButton = styled.div`
  cursor: pointer;
`;

export const ScreenTitle = styled.h1`
  font-weight: bold;
  font-size: 16pt;
  text-transform: uppercase;
  margin: 0 auto;
`;
export const Content = styled.div`
  flex: 1;
  overflow-y: scroll;
  padding: 0 20px;
  background: #f9f9f9;
  overflow-y: scroll;
`;
export const Footer = styled.footer`
  align-self: flex-end;
  background: #f9f9f9;
  width: 100%;
  padding: 10px;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      border: 1px solid #444444;
      color: #444;
      &:focus {
        & + label {
          color: #ec584c !important;
        }
      }
    }
    label {
      color: #444444;
      background: #f9f9f9 !important;
    }
  }
`;

export const FormInputContainer = styled.div`
  width: calc(100% - 65px);
`;

export const ButtonSend = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 45px;
  border: none;
  background: linear-gradient(#ec584c, #e43959);
  box-shadow: 0 1px 3px #00000033;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const ChatBox = styled.div`
  padding: 20px 0;
`;

export const ChatContent = styled.div`
  display: grid;
  grid-template-columns: 0fr 1fr;
  grid-gap: 15px;
  margin-bottom: 19px;
`;

export const UserChat = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(#403850, #30283d);
  border-radius: 20px 20px 5px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageChatUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 40%;
  }
`;

export const MessagaChat = styled.div`
  text-align: justify;
  letter-spacing: 0.15pt;
  font-size: 16px;
  line-height: 24px;
  margin-top: 14px;
  color: #404040;
`;

export const ChatContentUser = styled.div`
  display: grid;
  grid-template-columns: 1fr 0fr;
  grid-gap: 15px;
  margin-bottom: 19px;
  ${UserChat} {
    background: linear-gradient(#e43959, #ec584c);
  }
  ${UserChat} {
    border-radius: 20px 20px 20px 5px;
  }
  ${MessagaChat} {
    text-align: right;
  }
  h2 {
    font-weight: bold;
  }
`;
