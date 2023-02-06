import React from 'react';
import ChangeThemeButton from '../ChangeTheme/ChangeThemeButton';
import CustomLink from '../CustomLink/CustomLink';
import { Containers, HeaderContainer } from './Header.style';

// import { Container } from './styles';

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Containers>
                <ChangeThemeButton />
            </Containers>
            <Containers>
                <CustomLink href="/">Home</CustomLink>
                <CustomLink href="About">About me</CustomLink>
                <CustomLink href="Projects">Projects</CustomLink>
                <CustomLink href="https://github.com/Rgnwld" target="_blank">
                    Github
                </CustomLink>
                <CustomLink href="https://www.linkedin.com/in/rgnwld/" target="_blank">
                    Linkedin
                </CustomLink>
            </Containers>
        </HeaderContainer>
    );
};

export default Header;
