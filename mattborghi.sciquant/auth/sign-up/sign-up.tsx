import React, { useState } from "react";

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

import { Error } from "@mattborghi/sciquant.extras.error";

import { CreatedUser } from "@mattborghi/sciquant.auth.created-user";

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
  row: {
    display: "flex",
    flexDirection: "row",
  },
  text: {
    textTransform: "none",
    fontSize: 13,
  },
  anchor: {
    color: green,
    paddingTop: theme.spacing(1),
    "&:visited": {
      color: green,
    },
  },
  space: { width: theme.spacing(1) },
}));

export interface SignUpProps extends React.HTMLAttributes<HTMLDivElement> {
  logo;
  secondaryLogo;
  firstName;
  onChangeFirstName;
  lastName;
  onChangeLastName;
  username;
  onChangeUsername;
  password;
  onChangePassword;
  newPassword;
  onChangeNewPassword;
  remember;
  onChangeRemember;
  onSubmit;
  onGoBack;
  loading;
  error;
}

export const SignUp = ({
  logo,
  secondaryLogo,
  firstName,
  onChangeFirstName,
  lastName,
  onChangeLastName,
  username,
  onChangeUsername,
  password,
  onChangePassword,
  newPassword,
  onChangeNewPassword,
  remember,
  onChangeRemember,
  onSubmit,
  onGoBack,
  loading,
  error,
  ...rest
}: SignUpProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
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
          Sign Up
        </Typography>
        <form
          className={classes.form}
          onSubmit={(e) => {
            // prevent the default state when submit that is refreshing the component
            e.preventDefault();
            onSubmit();
            setOpen(true);
          }}
        >
          <div className={classes.row}>
            <FormControl margin="normal" required>
              <InputLabel>First Name</InputLabel>
              <Input
                id="firstName"
                name="firstName"
                autoComplete="firstName"
                onChange={(e) => onChangeFirstName(e.target.value)}
                value={firstName}
              />
            </FormControl>
            <div className={classes.space} />
            <FormControl margin="normal" required>
              <InputLabel>Last Name</InputLabel>
              <Input
                id="lastName"
                name="lastName"
                autoComplete="lastName"
                onChange={(e) => onChangeLastName(e.target.value)}
                value={lastName}
              />
            </FormControl>
          </div>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input
              id="username"
              type="username"
              value={username}
              onChange={(event) => onChangeUsername(event.target.value)}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              onChange={(e) => onChangePassword(e.target.value)}
              value={password}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Confirm Password</InputLabel>
            <Input
              name="newPassword"
              type="password"
              id="newPassword"
              onChange={(e) => onChangeNewPassword(e.target.value)}
              value={newPassword}
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="default" />}
            onChange={(e) => onChangeRemember((prevState) => !prevState)}
            label={
              <Typography className={classes.text}>
                I accept the{" "}
                <a className={classes.anchor} href="#">
                  Terms of Use
                </a>{" "}
                &{" "}
                <a className={classes.anchor} href="#">
                  Privacy Policy
                </a>
              </Typography>
            }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="default"
            className={classes.submit}
            disabled={
              loading ||
              !username.trim() ||
              !newPassword.trim() ||
              !password.trim() ||
              !remember
            }
          >
            {loading ? "Registering..." : "Register"}
          </Button>

          <div className={classes.link}>
            <Typography component="h5" variant="subtitle2">
              Already have an account?{" "}
              <a className={classes.anchor} href="#" onClick={onGoBack}>
                Sign in!
              </a>
            </Typography>
          </div>
          {/* Error handling */}
          {error && <Error error={error} />}
        </form>
      </Paper>

      <CreatedUser open={open} username={username} onGoBack={onGoBack} />
    </main>
  );
};
