import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Typography, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: ({ drawerWidth }: CustomAppbarProps) => ({
    zIndex: theme.zIndex.drawer + 1,
    width: `calc(100% - ${drawerWidth})`,
    marginLeft: drawerWidth,
    height: 60,
  }),
  typography: {
    margin: "0 auto",
    transform: "translateX(50%)",
  },
  right: {
    position: "absolute",
    left: "auto",
    right: 0,
    display: "flex",
    orientation: "row",
  },
  left: {
    position: "absolute",
    right: "auto",
    left: "initial",
    display: "flex",
    orientation: "row",
  },
}));

export interface CustomAppbarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  logo?;
  title?: string;
  right?;
  left?;
  drawerWidth: string;
}

export const CustomAppbar = ({
  left,
  right,
  drawerWidth,
  logo,
  title,
  ...rest
}: CustomAppbarProps) => {
  const classes = useStyles({ drawerWidth });
  return (
    <AppBar className={classes.appBar} position="fixed" color="inherit">
      <Toolbar>
        <div className={classes.left}>
          {logo && logo}
          {left && left}
        </div>

        {title && (
          <Typography className={classes.typography} variant="h6" noWrap>
            {title}
          </Typography>
        )}

        <div className={classes.right}>{right}</div>
      </Toolbar>
    </AppBar>
  );
};
