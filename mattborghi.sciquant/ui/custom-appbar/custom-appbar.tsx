import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { AppBar, AppBarProps, Typography, Toolbar, Grid, Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    height: 60,
  },
  typography: {
    textTransform: "uppercase",
  },
  center:   {
    textAlign: "center",
  },
}));

export interface CustomAppbarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  logo?;
  title?: string;
  right?;
  left?;
  position?: AppBarProps["position"];
}

export const CustomAppbar = ({
  left,
  right,
  position = "static",
  logo,
  title,
}: CustomAppbarProps) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position={position} color="inherit">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center" wrap="nowrap">
          {logo && (
            <Hidden smDown>
            <Grid item md={1}>
              {logo}
            </Grid>
            </Hidden>
          )}
          {left && (
            <Grid item md={2}>
              {left}
            </Grid>
          )}
          {title && (
            <Grid item md className={classes.center}>
              <Typography className={classes.typography} variant="h6" noWrap>
                {title}
              </Typography>
            </Grid>
          )}
          {right && (
            <Grid container item md={5} justify="flex-end">
              {right}
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
