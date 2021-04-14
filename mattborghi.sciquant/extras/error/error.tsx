import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Snackbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  snackbar: {
    margin: theme.spacing(1),
  },
}));

export interface ErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  error;
}

export const Error = ({ error, ...rest }: ErrorProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  return (
    <Snackbar
      open={open}
      className={classes.snackbar}
      message={error ? error.message : ""}
      action={
        <Button onClick={() => setOpen(false)} color="inherit" size="small">
          Close
        </Button>
      }
    />
  );
};
