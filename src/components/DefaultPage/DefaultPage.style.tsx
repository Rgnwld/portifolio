import styled from 'styled-components';

export const DefaultPage = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;

    background-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.secondary};
`;
