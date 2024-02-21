import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: theme.palette.backgroundColors.window,
    display: "flex",
    justifyContent: "center",
    minHeight: "100vh", // Set minimum height to cover the entire viewport
    paddingTop: 65,
    paddingBottom: 65,
  },

  formContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.backgroundColors.form,
    width: 768,
    height: 950,
    borderRadius: 4,
    [theme.breakpoints.down("sm")]: {
      height: 370,
      width: 370,
    },
  },

  formWrapper: {
    width: 328,
    height: 326,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    rowGap: 16,
    [theme.breakpoints.down("sm")]: {
      width: 328,
      height: 326,
    },
  },

  loginButton: {
    fontSize: 14,
    borderRadius: 4,
    marginTop: 16,
    alignSelf: "flex-end",
    backgroundColor: theme.palette.backgroundColors.loginButton,
    color: "white",
    "&.MuiButton-root": {
      backgroundColor: theme.palette.backgroundColors.loginButton,
      "&:hover": {
        backgroundColor: theme.palette.backgroundColors.loginButton,
      }, // Keep the same color on hover
    },
  },

  textField: {
    marginTop: 16,
    fontSize: 16,
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.fieldColors.border, // border color when focused
      },
    },
  },

  label: {
    "&.MuiInputLabel-root": {
      color: theme.palette.backgroundColors.loginButton,
      "&.Mui-focused": {
        color: theme.palette.backgroundColors.loginButton,
      },
    },
  },
}));

export default useStyles;
