import React from "react";
import './App.css';
import Routes from './utils/AppRoutes';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import { AppLayout } from "./components/containers/AppLayout";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppLayout fullWidth sx={{ backgroundColor: "#000", minHeight: "100vh" }}>
        <Routes />
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
