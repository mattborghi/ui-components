import React from "react";

import {
  Button,
  CssBaseline,
  FormControl,
  Input,
  InputLabel,
  Paper,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const green = "rgb(150,200,150)";
const grey = "rgb(49,160,68)";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(6))]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(
      3
    )}px`,
  },
  logo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(
      3
    )}px`,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    marginTop: theme.spacing(3),
  },
  anchor: {
    color: green,
    paddingTop: theme.spacing(1),
    "&:link": {
      color: "rgb(200,200,200)",
    },
    "&:visited": {
      color: green,
    },
    "&:hover": {
      color: grey,
    },
    "&:active": {
      color: "purple",
    },
  },
}));

export interface RecoverPasswordProps
  extends React.HTMLAttributes<HTMLDivElement> {
  logo;
  secondaryLogo;
  username;
  onChangeUsername;
  onChangePassword;
  onGoBack;
}

export const RecoverPassword = ({
  logo,
  secondaryLogo,
  username,
  onChangeUsername,
  onChangePassword,
  onGoBack,
  ...rest
}: RecoverPasswordProps) => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper} elevation={20}>
        <div style={{ paddingBottom: 50 }} className={classes.logo}>
          <img src={logo} height="100" width="100" />
          <br />
          <img src={secondaryLogo} height="30" width="150" />
        </div>
        <Typography component="h1" variant="h5">
          Password Reset
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input
              id="email"
              name="email"
              onChange={(e) => onChangeUsername(e.target.value)}
              value={username}
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="default"
            className={classes.submit}
            onClick={onChangePassword}
            disabled={!Boolean(username)}
          >
            Reset Password
          </Button>
          <Typography component="h5" variant="subtitle2">
            <a className={classes.anchor} href="#" onClick={onGoBack}>
              Back to Sign In
            </a>
          </Typography>
        </form>
      </Paper>
    </main>
  );
};
