import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

import VerifiedUserTwoTone from "@material-ui/icons/VerifiedUserTwoTone";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main
  },
}));

export interface CreatedUserProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  username;
  onGoBack;
}

export const CreatedUser = ({
  open,
  username,
  onGoBack,
  ...rest
}: CreatedUserProps) => {
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      disableBackdropClick={true} // don't allow to close window by clicking outside
    >
      <DialogTitle>
        <VerifiedUserTwoTone className={classes.avatar} />
        New Account
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          User <strong>{username}</strong> successfully created!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="contained" onClick={onGoBack}>
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};
