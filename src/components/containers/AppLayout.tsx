import { FunctionComponent } from "react";
import { SxProps } from "@mui/system";
import { styled } from "@mui/material/styles";
import Container, { ContainerProps } from "@mui/material/Container";

export interface AppLayoutProps {
  fullWidth?: boolean;
  backgroundColor?: string;
  disableGutters?: boolean;
  disableGuttersX?: boolean;
  disableGuttersY?: boolean;
  sx?: SxProps;
  children: JSX.Element | JSX.Element[];
}

const defaultGuttersX: any = {
  paddingRight: "6rem",
  paddingLeft: "6rem",
};
const defaultGuttersY: any = {
  paddingTop: "2.4rem",
  paddingBottom: "2.4rem",
};

const CustomContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  "&.MuiContainer-root": {
    maxWidth: "100%",
    width: "100vw",
    marginLeft: "0",
    marginRight: "0",
  },
  "&.MuiContainer-fixed": {
    maxWidth: "1224px",
    marginLeft: "auto",
    marginRight: "auto",
    boxSizing: "content-box",
  },
  "&:last-child": {
    paddingBottom: "0rem",
  },
}));

export const AppLayout: FunctionComponent<AppLayoutProps> = (props) => {
  const {
    fullWidth,
    backgroundColor,
    disableGutters,
    disableGuttersX,
    disableGuttersY,
    sx,
    children,
  } = props;

  let bgColor: string = backgroundColor || "transparent";
  if (fullWidth && !backgroundColor) {
    bgColor = "#F6F6F6";
  }

  let gutters: any = { ...defaultGuttersX, ...defaultGuttersY };
  if (disableGutters) {
    gutters = {};
  } else if (disableGuttersX) {
    gutters = { ...defaultGuttersY };
  } else if (disableGuttersY) {
    gutters = { ...defaultGuttersX };
  }
  return (
    <CustomContainer
      disableGutters
      fixed={!fullWidth}
      sx={{
        boxSizing: fullWidth ? "border-box" : "content-box",
        backgroundColor: bgColor,
        ...gutters,
        ...sx,
      }}
    >
      {children}
    </CustomContainer>
  );
};
