import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    textAlign: "center",
  },
  progress: {
    margin: theme.spacing(2),
    color: theme.palette.secondary.dark,
  },
}));

export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Loading = ({ ...rest }: LoadingProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress className={classes.progress} />
    </div>
  );
};
