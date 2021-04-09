import React, { forwardRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Button, ButtonProps, Badge } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export interface NotificationsButtonProps extends ButtonProps {}

export const NotificationsButton = forwardRef(
  ({ ...rest }: NotificationsButtonProps, ref: any) => {
    const classes = useStyles();
    return (
      <Button
        id="btn-transparent"
        ref={ref}
        aria-label="notification-btn"
        aria-controls="menu-list-grow"
        aria-haspopup="true"
        {...rest}
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
    );
  }
);
