import React from 'react';
import Button from '../../components/Button/Button';
import ChangeThemeButton from '../../components/ChangeTheme/ChangeThemeButton';
import { Background, Description, Title } from './Home.style';

// import { Container } from './styles';

const HomePage: React.FC = () => {
    return (
        <Background>
            <Title> Olá! Eu sou o Reginaldo.</Title>
            <Description>
                Sou desenvolvedor{' '}
                <strong>
                    <u>Front-End</u>
                </strong>
            </Description>
        </Background>
    );
};

export default HomePage;
