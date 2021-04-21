import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { LinearProgress } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: "80%",
  },
  colorPrimary: {
    backgroundColor: "#00695C",
  },
  barColorPrimary: {
    backgroundColor: "#B2DFDB",
  },
});

export interface LinearLoaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  setFinish;
}

export const LinearLoader = ({ setFinish, ...rest }: LinearLoaderProps) => {
  const classes = useStyles();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) setFinish(true);
  }, [progress]);

  return (
    <div className={classes.root} {...rest}>
      <LinearProgress
        variant="determinate"
        value={progress}
        classes={{
          colorPrimary: classes.colorPrimary,
          barColorPrimary: classes.barColorPrimary,
        }}
      />
    </div>
  );
};
