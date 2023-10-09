import React from "react";
import Stack from "@mui/material/Stack";

const textStyle = {
    WebkitFontSmoothing: 'antialiased',
    color: 'white',
    fontFamily: 'Audiowide',
    fontSize: '3rem',
};


const AvgLapNumber = () => {
    return (
        <Stack>
            <span style={textStyle}>AvgLapNumber</span>
        </Stack>
    );
};


export default AvgLapNumber;
