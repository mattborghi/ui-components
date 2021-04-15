import React from "react";

import { Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { BackgroundParticles } from "@mattborghi/sciquant.ui.background-particles";

const useStyles = makeStyles((theme) => ({
  main: {
    minHeight: "100vh",
    maxHeight: "100vh",
    width: "100vw",
  },
}));

export interface MainPageProps extends React.HTMLAttributes<HTMLDivElement> {
  logo;
}

export const MainPage = ({ children, logo, ...rest }: MainPageProps) => {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      <BackgroundParticles />

      <Grid
        container
        direction="column"
        justify="flex-end"
        alignItems="center"
        spacing={4}
        className={classes.main}
      >
        <Grid item xs>
          {children}
        </Grid>
        <Grid item xs={3}>
          <img src={logo} alt="logo crisil" width={150} height={90} />
        </Grid>
      </Grid>
    </main>
  );
};
