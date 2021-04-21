import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

import { LinearLoader } from "@mattborghi/sciquant.ui.linear-loader";

const useStyles = makeStyles({
  root: {
    textTransform: "none",
  },
  title: {
    backgroundColor: "rgb(42,42,42)",
    color: "white",
    fontSize: 16,
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  text: {
    fontSize: 14,
    color: "grey",
    textAlign: "center",
  },
  content: {
    display: "table",
    margin: "0 auto",
    paddingTop: 25,
    paddingBottom: 25,
    width: "100%",
  },
  along: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  button: {
    textTransform: "none",
  },
});

export interface ModelCreatedProps
  extends React.HTMLAttributes<HTMLDivElement> {
  open;
  onClose;
}

export const ModelCreated = ({ open, onClose, ...rest }: ModelCreatedProps) => {
  const classes = useStyles();

  const [finish, setFinish] = useState(false);

  useEffect(() => {
    if (finish) {
      onClose();
    }
  }, [finish]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className={classes.root}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle className={classes.title} disableTypography={true}>
        Generating Model
      </DialogTitle>
      <DialogContent className={classes.content}>
        <Typography className={classes.text}>
          Auto generating model template
        </Typography>
        <div className={classes.along}>
          <LinearLoader setFinish={setFinish} />
          <Button
            variant="outlined"
            className={classes.button}
            onClick={onClose}
          >
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
