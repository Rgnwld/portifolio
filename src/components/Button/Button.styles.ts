import styled from 'styled-components';

export const Background = styled.div`
    background-color: ${(props) => props.theme.color.secondary};
    color: ${(props) => props.theme.color.primary};
    border-radius: 8px;
    cursor: pointer;

    font-weight: 600;
    font-size: 0.75rem;

    width: fit-content;
    /* padding: 1rem 2rem; */
    padding: 1rem;

    *::selection {
        background: transparent;
    }
    *::-moz-selection {
        background: transparent;
    }
`;

export const InsideText = styled.span`
    background-color: ${(props) => props.theme.color.secondary};
    cursor: pointer;

    width: 3rem;
`;
