import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
  defaultColors: {
    primary: "rgb(245,185,40)",
    secondary: "rgb(55,56,64)",
  },
  colors: {
    primary: {
      main: "rgb(245,185,40)",
      contrastText: "rgb(55,56,64)",
    },
    secondary: {
      main: "rgb(55,56,64)",
      contrastText: "#fff",
    },
    text: {
      main: "rgb(55,56,64)",
    },
    background: {
      main: "#fff",
      hover: "#fafafa",
    },
    border: {
      main: "rgb(204,204,204)",
    },
  },
};

const darkTheme: DefaultTheme = {
  defaultColors: {
    primary: "rgb(245,185,40)",
    secondary: "rgb(55,56,64)",
  },
  colors: {
    primary: {
      main: "rgb(245, 185, 40)",
      contrastText: "#fff",
    },
    secondary: {
      main: "rgb(55,56,64)",
      contrastText: "#fff",
    },
    text: {
      main: "#fff",
    },
    background: {
      main: "rgb(44,44,50)",
      hover: "rgb(50, 51, 59)",
    },
    border: {
      main: "rgb(163, 163, 163)",
    },
  },
};

export { lightTheme, darkTheme };
