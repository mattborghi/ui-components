import React, { forwardRef } from "react";

import {
  Button,
  ButtonProps,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const menuWidth = 250;

const useStyles = makeStyles((theme) => ({
  item: {
    width: "100%",
    maxWidth: menuWidth,
    color: "white",
    height: 50,
    display: "flex",
    orientation: "row",
    textTransform: "none",
  },
  button: {
    margin: 0,
    padding: 0,
    height: 60,
  },
}));

export interface UserButtonProps extends ButtonProps {
  user;
}

export const UserButton = forwardRef(
  ({ user, ...rest }: UserButtonProps, ref: any) => {
    const classes = useStyles();

    const getUserAvatar = (user) => {
      let username = "";
      if (user) {
        username = !!user.firstName
          ? [user.firstName.slice(0, 1), user.lastName.slice(0, 1)]
              .join("")
              .toUpperCase()
          : user.username.slice(0, 2).toUpperCase();
      }
      return (
        <ListItemAvatar>
          <Avatar>{username}</Avatar>
        </ListItemAvatar>
      );
    };

    const getUserText = (user) => {
      let primary = "";
      if (user) {
        primary = !!user.firstName
          ? user.firstName + " " + user.lastName
          : user.username.charAt(0).toUpperCase() + user.username.slice(1);
      }
      return (
        <ListItemText
          primaryTypographyProps={{ color: "textPrimary" }}
          secondaryTypographyProps={{ color: "textSecondary" }}
          primary={primary}
          secondary="Sr. Quant Analyst"
        />
      );
    };
    return (
      <Button
        id="btn-transparent"
        ref={ref}
        aria-controls="menu-list-grow"
        aria-haspopup="true"
        className={classes.button}
        {...rest}
      >
        <List className={classes.item}>
          <ListItem>
            {getUserAvatar(user)}
            {getUserText(user)}
          </ListItem>
        </List>
      </Button>
    );
  }
);
