import React from "react";
import Stack from "@mui/material/Stack";

const textStyle = {
    WebkitFontSmoothing: 'antialiased',
    color: 'white',
    fontFamily: 'Audiowide',
    fontSize: '3rem',
};


const PitStopLoss = () => {
    return (
        <Stack>
            <span style={textStyle}>PitStopLoss</span>
        </Stack>
    );
};


export default PitStopLoss;
