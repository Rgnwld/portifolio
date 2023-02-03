import React, { Children, useEffect } from 'react';
import { LightMode, DarkMode, useCustomTheme } from '../../context/CustomThemeContext';
import { Background } from './Button.styles';
// import {} from "./"

const Button: React.FC<{ onClick: () => void }> = (args) => {
    return <Background {...args}>{args.children}</Background>;
};

export default Button;
