import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Button from './components/Button/Button';
import Slider from './components/Slider/Slider';
import { useCustomTheme } from './context/CustomThemeContext';
import './defaultStyle.css';

// import { Container } from './styles';

const Routes: React.FC = () => {
    const { theme } = useCustomTheme();

    return (
        <ThemeProvider theme={theme}>
            Components:
            <Slider />
            <Button>Button</Button>
        </ThemeProvider>
    );
};

export default Routes;
