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
export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    animation: ${fadeIn} ${(props) => props.theme.anim.slower} linear forwards;
`;

export const Containers = styled.div`
    display: flex;
    gap: 1rem;
`;
