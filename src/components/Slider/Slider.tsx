import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
// import { useTheme } from '../../context/ThemeContext';
import { Background, SliderObject } from './Slider.styles';

const Slider = () => {
    const [sliderState, setSliderState] = useState({ maxSlide: 99999, slided: 50 });
    const [holdState, setHoldState] = useState(false);

    useEffect(() => {
        try {
            setSliderState({ ...sliderState, maxSlide: document.getElementById('body').clientWidth });
        } catch (e) {}
    }, []);

    useEffect(() => {
        const Update = () => {
            setSliderState({ ...sliderState, slided: sliderState.slided - 1 });
        };

        const interval = setInterval(Update, 500);

        return () => clearInterval(interval);
    }, []);

    function OnChangeValue({ target }) {
        if (holdState == true) {
            setSliderState({ ...sliderState, slided: target.value });
        }
    }

    function GetMouse(state) {
        setHoldState(state);
    }
    return (
        <div>
            <input
                type="range"
                min="1"
                max="100"
                onMouseDown={() => GetMouse(true)}
                onMouseUp={() => GetMouse(false)}
                value={sliderState.slided}
                onChange={OnChangeValue}
                id="myRange"
            />
        </div>
    );

    return (
        <Background id="body">
            <SliderObject onMouseDown={() => {}}>{'>'}</SliderObject>
        </Background>
    );
};

export default Slider;
