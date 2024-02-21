// src/Theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    backgroundColors: {
      window: "#EFEFEF",
      form: "#FFFFFF",
      loginButton: "#C3001E",
    },
    fieldColors: {
      text: "#000000BC",
      border: "#0000001F",
      error: "#B00020",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default theme;
