import { Grid, Stack } from "@mui/material";
import React from "react";
import TrackButton from "../components/TrackButton";
import BahrainTrack from "../images/Bahrain.svg";

const textStyle: React.CSSProperties = {
    WebkitFontSmoothing: "antialiased",
    color: "white",
    fontFamily: "Audiowide",
    fontSize: "1.2rem",
    backgroundColor: "#000",
};

// Define a CSS class for the dotted line
const dottedLineStyle: React.CSSProperties = {
    borderBottom: "2px dotted white",
    paddingBottom: "8px", // Adjust as needed for spacing
};

const races = [
    {
        image: BahrainTrack,
        route: "/wec/models",
        label: "BAHRAIN",
        active: true
    },
    {
        image: BahrainTrack,
        route: "/models",
        label: "JAPAN",
        active: false
    },
    {
        image: BahrainTrack,
        route: "/models",
        label: "ITALY",
        active: false
    }
];


const Races = () => {
    const maxColumns = 3;
    const colWidths = {
        xs: 12,
        sm: 6,
        md: 4,
        lg: 4, // Adjust the lg width to accommodate 3 columns per row
    };

    return (
        <Grid container spacing={4} style={{marginTop: "4rem"}}>
            {races.map((track, index) => (
                <Grid item key={index} {...colWidths}>
                    <Stack spacing={2}>
                    <span style={textStyle}> {track.label}</span>
                    <span style={dottedLineStyle}></span> {/* Dotted line after label */}
                    <TrackButton
                        image={track.image}
                        route={track.route}
                        imageWidth={`${200 / maxColumns}%`}
                        imageHeight="auto"
                        active={track.active}
                    />
                    <span style={dottedLineStyle}></span> {/* Dotted line after TrackButton */}
                    </Stack>
                </Grid>
            ))}
        </Grid>
    );
};

export default Races;
