import React from 'react';
import NewContent from '../../components/NewContent/NewContent';
import { Background, Description, HighlightContent, SidedContainer, Title, Tools } from './About.style';
import MeImg from '../../imgs/me.png';

// import { Container } from './styles';

const AboutMe: React.FC = () => {
    return (
        <Background>
            <SidedContainer>
                <Title>Sobre Mim!</Title>
                <Description>
                    Sou formado em Análise e Desenvolvimento de Sistemas e possuo 2 anos de experiência como{' '}
                    <HighlightContent>Desenvolvedor Front-End</HighlightContent> em projetos de gestão interna.
                    <br /> Estou focado em estudar novas areas incluindo <HighlightContent>UI/UX</HighlightContent>,
                    além de participar de cursos de <HighlightContent>Testes Unitarios e CI/CD</HighlightContent>
                    .
                    <br /> Atualmente busco novos desafios e crescimento profissional.
                </Description>
            </SidedContainer>
            <SidedContainer>
                <Tools src={MeImg} alt="placeholder"></Tools>
            </SidedContainer>
        </Background>
    );
};

export default AboutMe;
