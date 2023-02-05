import React from 'react';
import { Background, Description, HighlightContent, Title } from './Home.style';

// import { Container } from './styles';

const HomePage: React.FC = () => {
    return (
        <Background>
            <Title href="about"> Olá! Eu sou o Reginaldo.</Title>
            <Description href="about">
                Sou desenvolvedor <HighlightContent>Front-End</HighlightContent>
            </Description>
        </Background>
    );
};

export default HomePage;
