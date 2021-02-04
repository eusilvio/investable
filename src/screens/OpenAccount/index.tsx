import React, { useContext, useEffect, useRef, useState } from "react";

import AuthContext from "../../contexts/Auth.context";

import { useHistory } from "react-router-dom";

import { IoArrowBack, IoSend } from "react-icons/io5";
import LogoImage from "../../assets/images/logo.png";

import Input from "../../components/Input";

import {
  Container,
  Header,
  BackButton,
  ScreenTitle,
  Content,
  ChatBox,
  ChatContent,
  UserChat,
  ImageChatUser,
  MessagaChat,
  Footer,
  FormInputContainer,
  ButtonSend,
  ChatContentUser,
} from "./style";
import Button from "../../components/Button";

const steps = [
  {
    question: "Primeiramente, gostaríamos de saber o seu nome?",
    field: { id: "name", type: "text", label: "Nome" },
    data: null,
    response:
      "Bem-vindo {name}, precisamos definir o seu perfil de investidor e para isso preciso fazer umas perguntas rápidas.",
  },
  {
    question: "Quantos anos você tem?",
    field: { id: "age", type: "number", label: "Idade" },
    data: null,
    response:
      "Muito bom!\nSobre investimentos, o que você pensa quando fala sobre?",
  },
  {
    field: {
      id: "taste",
      type: "options",
      options: [
        { label: "Não curto muito", value: "dont_like" },
        { label: "Eu gosto de investimentos!", value: "like" },
      ],
    },
    data: null,
    response:
      "Legal, eu também! \nE, me conte, do que você gosta mais em investimentos?",
  },
  {
    field: {
      id: "like_more",
      type: "options",
      options: [
        { label: "Rentabilidade", value: "profitability" },
        { label: "Segurança", value: "safety" },
      ],
    },
    data: null,
    response: "Certamente podemos te ajudar com isso!",
  },
  {
    question:
      "Muito obrigado pelas respostas {name}. Com isso já consigo te sugerir vários produtos do nosso portfólio, vamos lá?",
    field: {
      id: "finish",
      type: "options",
      options: [
        { label: "Sim, vamos!", value: "goToApp" },
        {
          label: "Não, prefiro rever minhas respostas",
          value: "backQuestions",
        },
      ],
    },
    data: null,
    response: "Safety",
  },
];

export default function OpenAccountScreen() {
  const [currentSteps, setCurrentSteps] = useState(0);
  const [stepsPassed, setStepsPassed] = useState<any[]>([]);

  const { signUp } = useContext(AuthContext);

  const history = useHistory();

  const contentChat = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (contentChat) {
      const scroll =
        (contentChat.current?.scrollHeight || 0) -
        (contentChat.current?.clientHeight || 0);

      contentChat.current?.scrollTo(0, scroll);
    }

    if (formRef) {
      formRef.current?.reset();
    }
  }, [stepsPassed]);

  function onChageDataInput(e: any) {
    steps[currentSteps].data = e.target.value;
  }

  function handleOpenAccount() {
    return signUp(stepsPassed);
  }

  return (
    <Container>
      <Header>
        <BackButton onClick={() => history.goBack()}>
          <IoArrowBack size={28} color="#FFF" />
        </BackButton>
        <ScreenTitle>Abra sua conta</ScreenTitle>
      </Header>
      <Content ref={contentChat}>
        <ChatBox>
          <ChatContent>
            <UserChat>
              <ImageChatUser>
                <img src={LogoImage} alt="Investable" />
              </ImageChatUser>
            </UserChat>
            <MessagaChat>
              Olá, nós somos a Investable. A nossa proposta é fazer você
              investir bem e investir com facilidade.
            </MessagaChat>
          </ChatContent>
          {stepsPassed.map((step, index) => {
            return (
              <React.Fragment key={index}>
                {step?.question && (
                  <ChatContent>
                    <UserChat>
                      <ImageChatUser>
                        <img src={LogoImage} alt="Investable" />
                      </ImageChatUser>
                    </UserChat>
                    <MessagaChat>{step?.question}</MessagaChat>
                  </ChatContent>
                )}
                {step?.data && (
                  <ChatContentUser>
                    <MessagaChat>{step.data}</MessagaChat>
                    <UserChat>
                      <ImageChatUser>
                        <h2>{stepsPassed[0]?.data[0]}</h2>
                      </ImageChatUser>
                    </UserChat>
                  </ChatContentUser>
                )}
                {step?.data && step.response && (
                  <ChatContent>
                    <UserChat>
                      <ImageChatUser>
                        <img src={LogoImage} alt="Investable" />
                      </ImageChatUser>
                    </UserChat>
                    <MessagaChat>
                      {step?.response.replace(
                        /\{(.*?)}/g,
                        (old: string, g: string) => stepsPassed[0]?.data || old
                      )}{" "}
                    </MessagaChat>
                  </ChatContent>
                )}
              </React.Fragment>
            );
          })}

          {steps[currentSteps]?.question && (
            <ChatContent>
              <UserChat>
                <ImageChatUser>
                  <img src={LogoImage} alt="Investable" />
                </ImageChatUser>
              </UserChat>
              <MessagaChat>
                {steps[currentSteps]?.question?.replace(
                  /\{(.*?)}/g,
                  (old: string, g: string) => stepsPassed[0]?.data || old
                )}
              </MessagaChat>
            </ChatContent>
          )}
        </ChatBox>
      </Content>
      <Footer>
        {steps[currentSteps]?.field.type !== "options" && (
          <form ref={formRef} onSubmit={(e) => e.preventDefault()}>
            <FormInputContainer>
              <Input
                id={steps[currentSteps]?.field.id}
                name={steps[currentSteps]?.field.id}
                label={(steps[currentSteps]?.field.label as string) || ""}
                onChange={onChageDataInput}
              />
            </FormInputContainer>
            <ButtonSend
              type="button"
              onClick={() => {
                setStepsPassed([...stepsPassed, steps[currentSteps]]);
                setCurrentSteps(currentSteps + 1);
              }}
            >
              <IoSend color="#FFF" size={22} />
            </ButtonSend>
          </form>
        )}

        {steps[currentSteps]?.field.type === "options" && (
          <>
            {steps[currentSteps].field?.options?.map((option) => (
              <Button
                key={option.label}
                onClick={async (e) => {
                  if (steps[currentSteps].field.id === "finish") {
                    if (option.value === "goToApp") {
                      await handleOpenAccount();
                    } else {
                      setStepsPassed([...[]]);
                      setCurrentSteps(0);
                    }
                    return;
                  }

                  setStepsPassed([
                    ...stepsPassed,
                    { ...steps[currentSteps], data: option.label },
                  ]);
                  setCurrentSteps(currentSteps + 1);
                }}
              >
                {option.label}
              </Button>
            ))}
          </>
        )}
      </Footer>
    </Container>
  );
}
