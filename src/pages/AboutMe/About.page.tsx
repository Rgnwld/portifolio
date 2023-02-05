import React from "react";
import {
  Background,
  Description,
  HighlightContent,
  SidedContainer,
  Title,
  MyImage,
} from "./About.style";

import MeLightImg from "../../imgs/me.lightmode.svg";
import MeDarkImg from "../../imgs/me.darkmode.svg";
import { useCustomTheme } from "../../context/CustomThemeContext";

// import { Container } from './styles';

const AboutMe: React.FC = () => {
  const { theme } = useCustomTheme();

  return (
    <Background>
      <SidedContainer>
        <Title>Sobre Mim!</Title>
        <Description>
          Sou formado em Análise e Desenvolvimento de Sistemas e possuo 2 anos
          de experiência como{" "}
          <HighlightContent>Desenvolvedor Front-End</HighlightContent> em
          projetos de gestão interna.
        </Description>
        <Description>
          {" "}
          Estou estudando novas áreas incluindo{" "}
          <HighlightContent>UI/UX, Testes Unitarios e CI/CD</HighlightContent>.
        </Description>
        <Description>
          Atualmente busco novos desafios e crescimento profissional.
        </Description>
      </SidedContainer>
      <SidedContainer>
        <MyImage
          src={theme.name == "darkMode" ? MeDarkImg : MeLightImg}
          alt="placeholder"
        ></MyImage>
      </SidedContainer>
    </Background>
  );
};

export default AboutMe;
