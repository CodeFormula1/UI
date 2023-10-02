import { FunctionComponent } from "react";
import { SxProps } from "@mui/system";
import { styled } from "@mui/material/styles";
import Container, { ContainerProps } from "@mui/material/Container";

export interface AppCardProps {
  variant: "material" | "flat";
  disableGutters?: boolean;
  sx?: SxProps;
  children: JSX.Element | JSX.Element[];
}

const CustomContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  "&.MuiContainer-root": { maxWidth: "100%", width: "100%" },
  "&.MuiContainer-fixed": {},
}));

export const AppCard: FunctionComponent<AppCardProps> = (props) => {
  const { variant, disableGutters, sx, children } = props;

  return (
    <CustomContainer
      disableGutters
      sx={{
        backgroundColor: variant === "flat" ? "#F6F6F6" : "#ffffff",
        padding: disableGutters ? "0" : "16px",
        borderRadius: "4px",
        boxShadow:
          variant === "flat" ? "none" : "0px 2px 4px rgba(0, 0, 0, 0.25)",
        ...sx,
      }}
    >
      {children}
    </CustomContainer>
  );
};
