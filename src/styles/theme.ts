import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#242526",
    },
    text: {
      primary: "#E4E6EB",
      secondary: "#B0B3B8",
    },
    background: {
      default: "#121212",
      paper: "#242526",
    },
    action: {
      hover: "#3a3b3c",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    caption: {
      fontSize: "1.5rem",
      fontWeight: 300,
      textTransform: "uppercase",
    },
    body1: {
      fontSize: "0.75rem",
      fontWeight: 500,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      textTransform: "uppercase",
    },
    button: {
      fontSize: "1rem",
      fontWeight: 600,
    },
  },
});

theme = responsiveFontSizes(theme, {
  breakpoints: ["xs", "sm", "md", "lg", "xl"],
  factor: 2,
});

export { theme };
