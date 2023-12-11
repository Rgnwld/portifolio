import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
// import { useTheme } from '../../context/ThemeContext';
import { Background, SliderInput, SliderObject } from './Slider.styles';

const Slider = () => {
    const [sliderState, setSliderState] = useState({
        slided: 0,
        actionSlideValue: 80,
        maxValue: 100,
        minValue: 0,
    });
    const [holdState, setHoldState] = useState(false);

    function OnChangeValue({ target }: any) {
        if (holdState == true) {
            setSliderState({ ...sliderState, slided: target.value });
        }
    }

    function GetMouse(state: any) {
        setHoldState(state);

        if (!state)
            if (sliderState.slided < sliderState.actionSlideValue) setSliderState({ ...sliderState, slided: 0 });
            else setSliderState({ ...sliderState, slided: 100 });
    }

    useEffect(() => {
        if (sliderState.slided == 100) console.log('Do action!');
    }, [sliderState]);

    return (
        <Background>
            <SliderInput
                type="range"
                min={sliderState.minValue}
                max={sliderState.maxValue}
                onMouseDown={() => GetMouse(true)}
                onMouseUp={() => GetMouse(false)}
                value={sliderState.slided}
                onChange={OnChangeValue}
                id="myRange"
            />
        </Background>
    );

    return (
        <Background id="body">
            <SliderObject onMouseDown={() => {}}>{'>'}</SliderObject>
        </Background>
    );
};

export default Slider;
