import React, { Children, ReactNode } from 'react';
import { CustomLinkSpan } from './CustomLink.style';

// import { Container } from './styles';

const CustomLink: React.FC<{ href?: string; onClick?: any; children: string | ReactNode; target?: string }> = ({
    children,
    href,
    target,
    onClick,
}) => {
    return (
        <CustomLinkSpan href={href} target={target} onClick={onClick}>
            {children}
        </CustomLinkSpan>
    );
};

export default CustomLink;
