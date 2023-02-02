import React, { useContext, useState } from 'react';
import { IColor, IThemeContext } from '../types/color.type';

export const BrightMode: IColor = {
    name: 'brightMode',
    color: {
        primary: '#f9f9f9',
        secondary: '#363636',
        tertiary: '#999999',
        quaternary: '#c4c4c4',
        quinary: '#707070',
    },
    font: {
        family: 'inter',
    },
};

export const DarkMode: IColor = {
    name: 'darkMode',
    color: {
        primary: '#363636',
        secondary: '#f9f9f9',
        tertiary: '#999999',
        quaternary: '#707070',
        quinary: '#c4c4c4',
    },
    font: {
        family: 'inter',
    },
};

const CustomThemeContext = React.createContext<IThemeContext | null>(null);

export const CustomThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<IColor>(BrightMode);

    function UpdateTheme(_newTheme: IColor) {
        setTheme(_newTheme);
    }

    return <CustomThemeContext.Provider value={{ theme, UpdateTheme }}>{children}</CustomThemeContext.Provider>;
};

export function useCustomTheme() {
    const { theme, UpdateTheme } = useContext(CustomThemeContext);
    return { theme, UpdateTheme };
}
