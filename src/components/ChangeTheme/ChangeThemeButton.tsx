import React, { useEffect } from 'react';
import Button from '../Button/Button';
import MoonImg from '../../imgs/moon.png';
import SunImg from '../../imgs/sun.png';
import { ImgChange } from './ChangeThemeButton.style';
import { DarkMode, LightMode, useCustomTheme } from '../../context/CustomThemeContext';

// import { Container } from './styles';

const ChangeThemeButton: React.FC = () => {
    const { theme, UpdateTheme } = useCustomTheme();

    function UpdateOnClick() {
        if (theme.name != DarkMode.name) {
            UpdateTheme(DarkMode.name);
        } else {
            UpdateTheme(LightMode.name);
        }
    }

    return (
        <Button onClick={UpdateOnClick}>
            <ImgChange src={theme.name == 'darkMode' ? SunImg : MoonImg} alt="" />
        </Button>
    );
};

export default ChangeThemeButton;
