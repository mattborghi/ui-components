import React from "react";

import { Error } from "@mattborghi/sciquant.extras.error";
import { makeStyles } from "@material-ui/core/styles";

import {
  Button,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Checkbox,
  Input,
  InputLabel,
  Paper,
  Typography,
} from "@material-ui/core";

const green = "rgb(150,200,150)";

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
  link: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    paddingTop: 10,
  },
  anchor: {
    color: green,
    paddingTop: theme.spacing(1),
    "&:visited": {
      color: green,
    },
  },
}));

export interface SignInProps extends React.HTMLAttributes<HTMLDivElement> {
  logo;
  secondaryLogo;
  onSubmit;
  onRegister;
  onNewPassword;
  username;
  onChangeUsername;
  password;
  onChangePassword;
  loading;
  error;
}

export const SignIn = ({
  logo,
  secondaryLogo,
  onSubmit,
  onRegister,
  onNewPassword,
  username,
  onChangeUsername,
  password,
  onChangePassword,
  loading,
  error,
  ...rest
}: SignInProps) => {
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
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input
              id="username"
              type="username"
              onChange={(e) => onChangeUsername(e.target.value)}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => onChangePassword(e.target.value)}
              value={password}
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="default" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="default"
            className={classes.submit}
            disabled={loading || !(!!username.trim() && !!password.trim())}
          >
            {loading ? "Signing in..." : "Sign in"}
          </Button>
          <div className={classes.link}>
            <Typography component="h5" variant="subtitle2">
              New user?{" "}
              <a className={classes.anchor} href="#" onClick={onRegister}>
                Sign up!
              </a>
            </Typography>
            <Typography component="h5" variant="subtitle2">
              <a className={classes.anchor} href="#" onClick={onNewPassword}>
                Forgot your password?
              </a>
            </Typography>

            {/* Error handling */}
            {error && <Error error={error} />}
          </div>
        </form>
      </Paper>
    </main>
  );
};
