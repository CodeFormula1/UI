import React from "react";
import { Stack } from "@mui/material";
import RaceButton from "./components/RaceButton";
import F1CarImage from "./images/F1_white.svg";
import WecCarImage from "./images/WEC_white.svg";
import WaveyDynamics from "./images/Wavey_Dynamics_Logo.svg"
import Header from "../../components/common/Header";
import Divider from '@mui/material/Divider';


const textStyle = {
    WebkitFontSmoothing: 'antialiased',
    color: 'white',
    fontFamily: 'Audiowide',
    fontSize: '2rem',
};

const Select = () => {

    return (
        <Stack spacing={20}>
            <Header />
            <Stack direction="row" justifyContent="space-around" alignItems="center" >
                <Stack spacing={4}>
                    <RaceButton
                        image={WecCarImage}
                        route="/wec"
                        imageWidth={300}
                        imageHeight={175}
                    />
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <img
                            src={WaveyDynamics}
                            alt="Wavey Dynamics"
                            width="150"
                            height="40"
                        />
                        <Divider orientation="vertical" flexItem style={{ backgroundColor: 'white' }} />
                        <span style={textStyle}> Code(WEC) </span>
                    </Stack>
                </Stack>
                <Stack spacing={4}>
                    <RaceButton
                        image={F1CarImage}
                        route="/f1"
                        imageWidth={300}
                        imageHeight={175}
                    />
                    <span style={textStyle}> Code(F!) </span>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Select;
