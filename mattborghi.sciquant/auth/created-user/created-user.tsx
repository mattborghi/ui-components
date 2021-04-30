import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@material-ui/core";

import VerifiedUserTwoTone from "@material-ui/icons/VerifiedUserTwoTone";

const useStyles = makeStyles((theme) => ({
  avatar: {
    paddingRight: theme.spacing(1),
  },
  title: {
    display: "flex",
    alignItems: "center",
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
      <DialogTitle disableTypography classes={{ root: classes.title }}>
        <VerifiedUserTwoTone fontSize="small" className={classes.avatar} />
        <Typography variant="h6">
          New Account
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          User <strong>{username}</strong> successfully created!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="default" variant="contained" onClick={onGoBack}>
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};
