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

const fadeLeft = keyframes`
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

export const Section = styled.div`
    display: flex;
    gap: 1rem;
`;

export const SideSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    height: 30rem;
    width: 100%;
    animation: ${fadeLeft} ${(props) => props.theme.anim.slow} linear forwards;
    &:first-of-type {
        justify-content: flex-end;
    }
`;

export const Containers = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const IMGPLACEHOLDER = styled.div`
    height: 100%;
    width: 40rem;

    border: solid 2px ${(props) => props.theme.color.secondary};
    border-radius: 8px;
`;

export const Description = styled.div`
    display: flex;
    width: 40rem;

    font-size: 1.2rem;
    text-indent: 50px;
    text-align: justify;
`;

export const ToolsSection = styled.div`
    display: flex;
    gap: 8px;
`;

export const ToolItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    padding: 8px;

    border-radius: 8px;
    border: dashed 2px ${(props) => props.theme.color.secondary};

    color: ${(props) => props.theme.color.secondary};

    img {
        height: 1.5rem;
    }
`;
