import React from "react";

import { Grid } from "@material-ui/core";

// Material helpers
import { makeStyles } from "@material-ui/core";

// Component styles
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
}));

export interface SimpleCenteredProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const SimpleCentered = ({ children, ...rest }: SimpleCenteredProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={4}>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};
