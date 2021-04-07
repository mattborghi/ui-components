import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import { Button, Badge } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
}));

export const NotificationsButton = ({ children, onClick, ...rest }) => {
  const classes = useStyles();
  return (
    <Button
      id="btn-transparent"
      // ref={anchorRef}
      aria-label="notification-btn"
      aria-controls="menu-list-grow"
      aria-haspopup="true"
      onClick={onClick}
    >
      <Badge
        className={classes.margin}
        badgeContent={99}
        max={99}
        variant="dot"
        color="error"
      >
        <NotificationsIcon color="inherit" />
      </Badge>
    </Button>
  )
};