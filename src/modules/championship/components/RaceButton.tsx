import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";

interface RaceButtonProps {
  sx?: React.CSSProperties;
  image: string;
  route?: string;
  imageWidth?: number;
  imageHeight?: number;
}

const StyledButton = styled(Button)(({ theme }) => ({
  background: "transparent",
  border: "none",
  cursor: "pointer",
  padding: 0,
  "&:hover": {
    backgroundColor: "transparent",
  },
  "&:active": {
    backgroundColor: "transparent",
  },
  "&:focus": {
    outline: "none !important",
  },
}));

const RaceButton: React.FC<RaceButtonProps> = ({
  sx,
  image,
  route,
  imageWidth,
  imageHeight,
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <StyledButton sx={sx} onClick={handleButtonClick}>
      <img
        src={image}
        alt="Button"
        style={{ width: imageWidth || 50, height: imageHeight || 50 }}
      />
    </StyledButton>
  );
};

export default RaceButton;
