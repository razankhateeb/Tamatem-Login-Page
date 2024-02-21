// Import necessary components and styles
import React, { useState } from "react";
import { TextField, Button, Box, Paper } from "@mui/material";
import Logo from "./Logo"; // Assuming Logo component is defined elsewhere
import useStyles from "../styles/styles"; // Assuming styles are defined elsewhere

// Define LoginForm functional component
const LoginForm = () => {
  const classes = useStyles(); // Get styles using custom hook

  // Define state variables for email, password, and email error
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  // Handle change in email input field
  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Update email state
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value); // Check if email format is valid
    setEmailError(isValidEmail ? "" : "Invalid email format"); // Update email error state based on validity
  };

  // Handle change in password input field
  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // Update password state
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log("Email:", email); // Log email
    console.log("Password:", password); // Log password
  };

  // Render login form
  return (
    <Box className={classes.mainContainer}>
      <Paper elevation={3} className={classes.formContainer}>
        <form onSubmit={handleSubmit}>
          {" "}
          {/* Handle form submission */}
          <Box className={classes.formWrapper}>
            <Logo /> {/* Render Logo component */}
            {/* Email input field */}
            <TextField
              label="Email"
              InputLabelProps={{
                classes: {
                  root: classes.label,
                },
              }}
              variant="outlined"
              fullWidth
              value={email}
              onChange={handleEmailChange}
              error={Boolean(emailError)}
              helperText={emailError}
              className={classes.textField}
            />
            {/* Password input field */}
            <TextField
              label="Password"
              InputLabelProps={{
                classes: {
                  root: classes.label,
                },
              }}
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={handlePasswordChange}
              className={classes.textField}
            />
            {/* Login button */}
            <Button
              type="submit"
              variant="contained"
              className={classes.loginButton}
            >
              LOGIN
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginForm; // Export LoginForm component
