import React, { useContext, useEffect, useState } from 'react';
import { getCookie, setCookie } from '../Helper/Cookies';
import { IColor, IThemeContext } from '../types/color.type';

export const LightMode: IColor = {
    name: 'lightMode',
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
    anim: {
        slower: '1s',
        slow: '0.5s',
        normal: '0.2s',
        fast: '0.1s',
        instant: '0s',
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
    anim: {
        slower: '1s',
        slow: '0.5s',
        normal: '0.2s',
        fast: '0.1s',
        instant: '0s',
    },
};

const CustomThemeContext = React.createContext<IThemeContext | null>(null);

export const CustomThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<IColor>(LightMode);

    useEffect(() => {
        const cookieTheme = getCookie('theme');
        if (cookieTheme) {
            UpdateTheme(cookieTheme);
        }
    }, []);

    function UpdateTheme(name: string) {
        switch (name) {
            case LightMode.name:
                setTheme(LightMode);
                setCookie('theme', LightMode.name);
                break;
            case DarkMode.name:
                setTheme(DarkMode);
                setCookie('theme', DarkMode.name);
                break;
        }
    }

    return <CustomThemeContext.Provider value={{ theme, UpdateTheme }}>{children}</CustomThemeContext.Provider>;
};

export function useCustomTheme() {
    const { theme, UpdateTheme } = useContext(CustomThemeContext);
    return { theme, UpdateTheme };
}
