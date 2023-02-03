import styled, { keyframes } from 'styled-components';

export const CustomLinkSpan = styled.a`
    text-decoration: none;

    color: ${(props) => props.theme.color.secondary};
`;
