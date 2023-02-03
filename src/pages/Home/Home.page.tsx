import React from 'react';
import Button from '../../components/Button/Button';
import ChangeThemeButton from '../../components/ChangeTheme/ChangeThemeButton';
import { Background, Description, HighlightContent, Title } from './Home.style';

// import { Container } from './styles';

const HomePage: React.FC = () => {
    return (
        <Background>
            <Title href="about"> Olá! Eu sou o Reginaldo.</Title>
            <Description href="about">
                Desenvolvedor <HighlightContent>Front-End</HighlightContent>
            </Description>
        </Background>
    );
};

export default HomePage;
