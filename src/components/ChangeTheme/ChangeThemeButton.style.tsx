import styled, { ThemeConsumer } from 'styled-components';

export const ImgChange = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1rem;
    width: 1rem;

    filter: invert(${(props) => (props.theme.name == 'lightMode' ? '100%' : '0%')});
`;
