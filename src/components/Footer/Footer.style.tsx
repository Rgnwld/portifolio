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

export const FooterContainer = styled.div`
    padding: 1rem;
    animation: ${fadeIn} ${(props) => props.theme.anim.slower} linear forwards;
    /* font-family: roboto; */
`;

export const InfoContainer = styled.div``;
