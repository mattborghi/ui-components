import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  IconButton,
} from "@material-ui/core";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    // alignItems: "center",
    height: 60,
    zIndex: 90,
  },
  typography: {
    // marginTop: 0,
    // paddingLeft: 30,
  },
  toolbar: {
    width: "100%",
  },
}));

export interface MiniAppBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Logo of the bar. */
  logo;
  /** Title of the bar. */
  title: string;
  /** Define if we want the mode with (true) collapsable feature or without (false, default). */
  collapse?: boolean;
  /** State that tracks if we click on the button that toggles the collapsable bar. */
  open?;
  /** What to do when we click on the button. */
  onClick?;
}

export const MiniAppBar = ({
  logo,
  title,
  collapse = false,
  open,
  onClick,
  ...rest
}: MiniAppBarProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="relative" color="inherit">
        <Toolbar className={collapse ? classes.toolbar : ""}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={6} lg={collapse ? 11 : 12}>
              <Grid
                container
                direction="row"
                alignItems="center"
                justify={collapse ? "flex-start" : "center"}
                spacing={1}
              >
                <Grid item>{logo}</Grid>
                <Grid item>
                  <Typography noWrap variant="h6">
                    {title}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {collapse && (
              <Grid item lg={1} xs={1}>
                <IconButton
                  color="inherit"
                  id="btn-transparent"
                  onClick={onClick}
                >
                  {open ? (
                    <KeyboardArrowUpIcon color="inherit" />
                  ) : (
                    <KeyboardArrowDownIcon color="inherit" />
                  )}
                </IconButton>
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
