import React from "react";
import { Divider, Stack } from "@mui/material";


const textStyle = {
    WebkitFontSmoothing: 'antialiased',
    color: 'white',
    fontFamily: 'Audiowide',
    fontSize: '3rem',
};

const Header = () => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            spacing={4}
        >
            <Divider
                orientation="horizontal"
                sx={{
                    backgroundColor: "#FFF",
                    height: "2px",
                    flex: 1,
                }}
            />
            <div style={textStyle}>Code F(x)</div>
        </Stack>

    );
};

export default Header;
