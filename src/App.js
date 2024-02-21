// src/App.js
import React from "react";
import LoginForm from "./Components/LoginForm";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme/Theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <LoginForm />
      </ThemeProvider>
    </div>
  );
}

export default App;
