import React from "react";
import { AppLayout } from "../../components/containers/AppLayout";
import Stack from "@mui/material/Stack";
import F1Routes from "./utils/F1Routes";



const textStyle = {
    WebkitFontSmoothing: 'antialiased',
    color: 'white',
    fontFamily: 'Audiowide',
    fontSize: '3rem',
};

const Homepage = () => {

    return (
        <div style={{ backgroundColor: "#000", minHeight: "100vh" }}>
            <AppLayout 
                sx={{
                    color: "#2A575F" }}>
                <Stack spacing={2}>
                    <div style={textStyle}>Welcome to the world of F1. Coming soon!</div>
                </Stack>
                <F1Routes/>
            </AppLayout>
        </div>
    );
};

export default Homepage;
