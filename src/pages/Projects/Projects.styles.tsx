import styled, { keyframes } from "styled-components";

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