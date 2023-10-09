import React from "react";
import Stack from "@mui/material/Stack";


const textStyle: React.CSSProperties = {
    WebkitFontSmoothing: 'antialiased',
    color: 'white',
    fontFamily: 'Audiowide',
    fontSize: '2rem',
    textAlign: "center"
};

const MonteCarloSimulation = () => {

    return (
        <Stack>
            <span>Stepper</span>
            <span style={textStyle}>Reinforcement Learning!!!</span>
        </Stack>
    );
};


export default MonteCarloSimulation;
