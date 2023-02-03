import React, { Children, ReactNode } from 'react';
import { CustomLinkSpan } from './CustomLink.style';

// import { Container } from './styles';

const CustomLink: React.FC<{ href?: string; children: string | ReactNode }> = ({ children, href }) => {
    return <CustomLinkSpan href={href}>{children}</CustomLinkSpan>;
};

export default CustomLink;
