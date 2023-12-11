import React, { PropsWithChildren, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useCustomTheme } from './context/CustomThemeContext';
import HomePage from './pages/Home/Home.page';
import { createBrowserRouter, RouterProvider, Route, Link, createHashRouter } from 'react-router-dom';
import { DefaultPage } from './components/DefaultPage/DefaultPage.style';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutMe from './pages/AboutMe/About.page';
import Projects from './pages/Projects/Projects.page';
import Globalstyles from './globalstyles';

// import { Container } from './styles';

const DefaultPageConfiguration: React.FC<PropsWithChildren> = ({ children }) => {
    const { theme } = useCustomTheme();

    return (
        <ThemeProvider theme={theme}>
            <Globalstyles />
            <DefaultPage>
                <Header />
                {children}
                <Footer />
            </DefaultPage>
        </ThemeProvider>
    );
};

const routerHS = createHashRouter([
    {
        path: '/',
        element: (
            <DefaultPageConfiguration>
                <HomePage />
            </DefaultPageConfiguration>
        ),
    },
    {
        path: 'about',
        element: (
            <DefaultPageConfiguration>
                <AboutMe />
            </DefaultPageConfiguration>
        ),
    },
    {
        path: 'projects',
        element: (
            <DefaultPageConfiguration>
                <Projects />
            </DefaultPageConfiguration>
        ),
    },
]);

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <DefaultPageConfiguration>
                <HomePage />
            </DefaultPageConfiguration>
        ),
    },
    {
        path: 'about',
        element: (
            <DefaultPageConfiguration>
                <AboutMe />
            </DefaultPageConfiguration>
        ),
    },
    {
        path: 'projects',
        element: (
            <DefaultPageConfiguration>
                <Projects />
            </DefaultPageConfiguration>
        ),
    },
]);

export default router;
