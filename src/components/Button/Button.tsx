import React, { Children, useEffect } from 'react';
import { BrightMode, DarkMode, useCustomTheme } from '../../context/CustomThemeContext';
import { Background } from './Button.styles';
// import {} from "./"

const Button: React.FC = (args) => {
    const { theme, UpdateTheme } = useCustomTheme();

    useEffect(() => {
        console.log(theme);
    }, [theme]);

    function UpdateOnClick() {
        if (theme.name != DarkMode.name) UpdateTheme(DarkMode);
        else UpdateTheme(BrightMode);
    }

    return <Background onClick={() => UpdateOnClick()}>{args.children}</Background>;
};

export default Button;
