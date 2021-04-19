import React from "react";

import { CssBaseline, Grid, Hidden } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  grid: {
    minHeight: "100vh",
  },
  rightpane: {
    textAlign: "center",
  },
  leftpane: {
    maxHeight: "100vh",
  },
  header: {},
  main: {
    flexGrow: 1,
  },
}));

export interface ProjectPoolProps extends React.HTMLAttributes<HTMLDivElement> {
  header;
  leftpane;
}

export const ProjectPool = ({
  children,
  header,
  leftpane,
  ...rest
}: ProjectPoolProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid
        container
        direction="row"
        alignItems="stretch"
        // justify="flex-start"
        className={classes.grid}
      >
        <Hidden smDown>
          <Grid item sm={2} className={classes.leftpane}>
            {leftpane}
          </Grid>
        </Hidden>
        <Grid
          item
          container
          sm
          md={10}
          direction="column"
          justify="flex-start"
          alignItems="stretch"
          className={classes.rightpane}
          spacing={0}
        >
          <Grid item className={classes.header}>
            {header}
          </Grid>
          <Grid item className={classes.main}>
            {children}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
