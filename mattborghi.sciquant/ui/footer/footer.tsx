import React from "react";

// Material helpers
import { makeStyles } from "@material-ui/core";

// Material components
import { Divider, Typography, Grid } from "@material-ui/core";

// Component styles
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  container: {
    padding: `${theme.spacing(1)}px ${theme.spacing(4)}px 0px`,
  },
  company: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1) / 2,
  },
}));

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  logo;
  primary: string;
  secondary: string;
}

export const Footer = ({ logo, primary, secondary, ...rest }: FooterProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root} {...rest}>
      <Divider />
      <Grid
        container
        justify="space-between"
        alignItems="center"
        className={classes.container}
      >
        <Grid item lg={9}>
          <Typography
            className={classes.company}
            variant="caption"
            color="textSecondary"
          >
            {primary}
          </Typography>{" "}
          <br />
          <Typography variant="caption" color="textSecondary">
            {secondary}
          </Typography>
        </Grid>
        <img src={logo} height={32} className={classes.company} />
      </Grid>
    </div>
  );
};
