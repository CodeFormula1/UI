// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFF", // Change this to your desired primary color
      light: "#FFF", // Change this to your desired hover background color
    },
    secondary: {
      main: "#FF0000", // Change this to your desired secondary color
    },
  },
});

export default theme;
