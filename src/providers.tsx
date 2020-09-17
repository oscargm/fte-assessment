import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import * as React from "react";

const theme = createMuiTheme({
  //   spacing: 24,
  palette: {
    //primary: { main: "#333" },    //TODO: Create theme based on design system props
  },
});

export const RocheThemeProvider: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
