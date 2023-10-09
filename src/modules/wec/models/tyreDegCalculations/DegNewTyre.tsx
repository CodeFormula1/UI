import React from "react";
import Stack from "@mui/material/Stack";
import { SvgIcon } from "@mui/material";
import MedTyres from "../../../../components/images/med_tyres.svg";

const textStyle = {
    WebkitFontSmoothing: 'antialiased',
    color: 'white',
    fontFamily: 'Audiowide',
    fontSize: '3rem',
};


function DegNewTyre() {
    return (
        <SvgIcon>
            <path d={MedTyres} />
        </SvgIcon>
    );
}

export default DegNewTyre;
