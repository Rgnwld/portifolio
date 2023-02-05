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
  gap: 4rem;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  overflow: hidden;
  transition: all 0.2s ease;

  & > * {
    animation: ${fadeIn} ${(props) => props.theme.anim.slow} linear forwards;
  }
`;

export const SidedContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;

  &:first-of-type {
    display: flex;
    gap: 8px;
    align-items: flex-end;
    text-align: justify;
    text-indent: 50px;
  }
`;

export const Title = styled.h1`
  display: flex;
  font-size: 4rem;
  margin: 0;
  font-weight: 800;

  @media (max-width: 1399px) {
    & {
      font-size: 3rem;
    }
  }
`;

export const Description = styled.span`
  width: 40em;
  font-size: 1.15rem;
  /* line-height: 1.5rem; */
  font-weight: 400;

  @media (max-width: 1399px) {
    & {
      width: 30rem;
      font-size: 1.1rem;
    }
  }
`;

export const HighlightContent = styled.span`
  font-weight: 800;
  /* text-decoration: underline; */
  transition: all 0s ease;
`;

export const MyImage = styled.img`
  width: 30rem;
  filter: grayscale(100);

  animation: ${fadeIn} ${(props) => props.theme.anim.slower} linear forwards;

  @media (max-width: 1399px) {
    & {
      width: 20rem;
    }
  }
`;
