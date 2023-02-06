import React, { Children, ReactNode } from 'react';
import { CustomLinkSpan } from './CustomLink.style';

// import { Container } from './styles';

const CustomLink: React.FC<{ href?: string; children: string | ReactNode; target?: string }> = ({
    children,
    href,
    target,
}) => {
    return (
        <CustomLinkSpan href={href} target={target}>
            {children}
        </CustomLinkSpan>
    );
};

export default CustomLink;
