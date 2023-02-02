import React from 'react';

import { CustomThemeProvider } from './context/CustomThemeContext';
import Routes from './routes';

const Root: React.FC = () => {
    return (
        <CustomThemeProvider>
            <Routes />
        </CustomThemeProvider>
    );
};

export default Root;
