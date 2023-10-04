import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import playButtonImage from "../images/play-button.svg";


const StyledButton = styled(Button)(({ theme }) => ({
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: 0,
    "&:hover": {
        backgroundColor: "transparent", // Remove background color on hover
    },
    "&:active": {
        backgroundColor: "transparent", // Remove background color on click
    },
    "&:focus": {
        outline: "none !important", // Remove the focus outline
    }

}));

const StyledImage = styled("img")(({ theme }) => ({
    width: 50, // Adjust the width and height as needed
    height: 50,
    filter: "brightness(0) invert(1)",
}));

const PlayButton = () => {

    const navigate = useNavigate(); 

    const handleButtonClick = () => {
        navigate("/race-select");
      };
    
    return (
        <StyledButton style={{ outline: "none !important" }} onClick={handleButtonClick}>
            <StyledImage
                src={playButtonImage}
                alt="Play"
            />
        </StyledButton>

    );
};

export default PlayButton;
