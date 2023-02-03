import React from 'react';
import { Container } from './NewContent.style';

// import { Container } from './styles';

const NewContent: React.FC = ({ children }) => {
    return <Container>{children}</Container>;
};

export default NewContent;
