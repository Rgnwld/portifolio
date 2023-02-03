import styled from "styled-components";

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

export const SliderInput = styled.input`
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;

  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.secondary};

  width: 100%;

  border-radius: 8px;

  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    border-radius: 6px;

    width: 25px;
    height: 25px;
    background: ${(props) => props.theme.color.secondary};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background:  ${(props) => props.theme.color.secondary};
    cursor: pointer;
    border-radius: 6px;
  }
`;
