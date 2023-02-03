import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
   opacity: 0;
  }

  50% {
    opacity: 0%;
  }

  100% {
    opacity: 100%;
  }
`;

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;

    & > * {
        animation: ${fadeIn} ${(props) => props.theme.anim.slow} linear forwards;
    }
`;

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: 800;
    margin: 0;
`;

export const Description = styled.h1`
    font-size: 1.5rem;
    font-weight: 400;
    margin: 8px;
`;
