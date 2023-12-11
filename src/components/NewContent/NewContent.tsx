import React, { PropsWithChildren } from 'react';
import { Container } from './NewContent.style';

// import { Container } from './styles';

const NewContent: React.FC<PropsWithChildren> = ({ children }) => {
    return <Container>{children}</Container>;
};

export default NewContent;
