import styled, { keyframes } from 'styled-components';

export const CustomLinkSpan = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    color: ${(props) => props.theme.color.secondary};

    &:hover {
        text-decoration: underline;
    }
`;
