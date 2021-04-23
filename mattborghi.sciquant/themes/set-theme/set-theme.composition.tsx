import React from "react";
import { makeStyles, Paper } from "@material-ui/core";
import { SetTheme } from "./set-theme";

// const useStyles = makeStyles((theme) => ({
//   text: {
//     color: theme.palette.background.paper,
//     background: theme.palette.primary.main,
//   },
// }));

export const DarkSetTheme = () => {
  // const classes = useStyles();
  return (
    <SetTheme darkTheme={true}>
      <Paper>This is a dark theme!</Paper>
    </SetTheme>
  );
};

export const LightSetTheme = () => {
  // const classes = useStyles();
  return (
    <SetTheme darkTheme={false}>
      <Paper>This is a light theme!</Paper>
    </SetTheme>
  );
};
