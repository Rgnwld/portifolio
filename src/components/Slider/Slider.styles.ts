import styled from 'styled-components';

export const Background = styled.div`
    background-color: ${(props) => props.theme.color.secondary};
    width: 30rem;
    padding: 1rem;

    border-radius: 8px;
`;

export const SliderObject = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.secondary};

    height: 3rem;
    width: 5rem;
    border-radius: 8px;

    cursor: grab;
`;
