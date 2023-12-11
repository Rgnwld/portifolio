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
  @media (max-width: 1399px) {
    &{
      font-size: 0.75rem
    }
  }
`;

export const InfoContainer = styled.div``;
