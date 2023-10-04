import React from "react";
import { AppLayout } from "../../components/containers/AppLayout";
import { Divider, Stack } from "@mui/material";
import RaceButton from "./components/RaceButton";
import F1CarImage from "./images/F1_white.svg";
import WecCarImage from "./images/WEC_white.svg";



const textStyle = {
    WebkitFontSmoothing: 'antialiased',
    color: 'white',
    fontFamily: 'Audiowide',
    fontSize: '3rem',
};

const Select = () => {

    return (
        <div style={{ backgroundColor: "#000", minHeight: "100vh" }}>
            <AppLayout
                sx={{
                    color: "#2A575F"
                }}>

                <Stack spacing={20}>
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="flex-end"
                        spacing={4}
                        sx={{
                            color: "white",
                            fontFamily: "Audiowide",
                            fontSize: "3rem",
                        }}
                    >
                        <Divider
                            orientation="horizontal"
                            sx={{
                                backgroundColor: "#FFF",
                                height: "2px",
                                flex: 1,
                            }}
                        />
                        <div style={textStyle}>Code F(x)</div> {/* Text on the right */}
                    </Stack>
                    <Stack direction="row"  justifyContent="space-around">
                        <RaceButton
                            sx={{ color: "red" }}
                            image={WecCarImage}
                            route="/wec"
                            imageWidth={300} // Adjust the width as needed
                            imageHeight={175} // Adjust the height as needed
                        />
                        <RaceButton
                            sx={{ color: "red" }}
                            image={F1CarImage}
                            route="/f1"
                            imageWidth={300} // Adjust the width as needed
                            imageHeight={175} // Adjust the height as needed
                        />

                    </Stack>
                </Stack>
            </AppLayout>
        </div>
    );
};

export default Select;
