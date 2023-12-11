import React from 'react';
import ChangeThemeButton from '../ChangeTheme/ChangeThemeButton';
import CustomLink from '../CustomLink/CustomLink';
import { Containers, HeaderContainer } from './Header.style';
import { useNavigate } from 'react-router-dom';

// import { Container } from './styles';

const Header: React.FC = () => {
    const nav = useNavigate();

    function OnClick(teste: string) {
        nav(teste);
    }

    return (
        <HeaderContainer>
            <Containers>
                <ChangeThemeButton />
            </Containers>
            <Containers>
                <CustomLink
                    onClick={(e: any) => {
                        e.preventDefault();
                        OnClick('/');
                    }}
                >
                    Home
                </CustomLink>
                <CustomLink
                    onClick={(e: any) => {
                        e.preventDefault();
                        OnClick('/about');
                    }}
                >
                    About me
                </CustomLink>
                {/* <CustomLink
                    onClick={(e) => {
                        e.preventDefault;
                        OnClick('/projects');
                    }}
                >
                    Projects
                </CustomLink> */}
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
