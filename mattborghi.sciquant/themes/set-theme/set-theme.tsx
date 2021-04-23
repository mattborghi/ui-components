import React from "react";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

export type SetThemeProps = {
  /**
   * a text to be rendered in the component.
   */
  darkTheme?: boolean;
  children;
};

export function SetTheme({ children, darkTheme = false }: SetThemeProps) {
  const theme = createMuiTheme({
    palette: {
      type: darkTheme ? "dark" : "light",
    },
  });
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
