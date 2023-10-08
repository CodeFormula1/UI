import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";

interface TrackButtonProps {
  sx?: React.CSSProperties;
  image: string;
  route?: string;
  imageWidth?: number | string;
  imageHeight?: number | string;
  active?: boolean;
}

const hoverColor = "#FF5733";

const StyledButton = styled(Button)(({ theme }) => ({
  background: "transparent",
  border: "none",
  cursor: "pointer",
  padding: 0,
  position: "relative", // Add this to make ::before positioning work
  "&:hover": {
    backgroundColor: "transparent",
    transform: "scale(1.1)",
    "--fill-color": hoverColor,
  },
  "&:active": {
    backgroundColor: "transparent",
  },
  "&:focus": {
    outline: "none !important",
  },
  // Add styles for the pseudo-element for disabled buttons
  "&[disabled]::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent gray overlay
    pointerEvents: "none", // Prevent interactions with the overlay
  },
}));

const TrackButton: React.FC<TrackButtonProps> = ({
  sx,
  image,
  route,
  imageWidth,
  imageHeight,
  active
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (active && route) {
      navigate(route);
    }
  };

  return (
    <StyledButton
      sx={sx}
      onClick={handleButtonClick}
      disabled={!active}
    >
      <img
        src={image}
        alt="Button"
        width={imageWidth}
        height={imageHeight === "auto" ? imageHeight : undefined}
      />
    </StyledButton>
  );
};

export default TrackButton;
