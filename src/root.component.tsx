import React from 'react';
import { CustomThemeProvider } from './context/CustomThemeContext';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

const Root: React.FC = () => {
    return (
        <CustomThemeProvider>
            <RouterProvider router={router} />
        </CustomThemeProvider>
    );
};

export default Root;
