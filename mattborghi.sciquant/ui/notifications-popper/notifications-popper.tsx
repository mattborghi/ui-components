import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemAvatar,
  ClickAwayListener,
  Avatar,
} from "@material-ui/core";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const useStyles = makeStyles((theme) => ({
  subheader: {
    fontSize: 16,
    fontWeight: "bold",
  },
  list: {
    maxHeight: 250,
    overflow: "auto",
    maxWidth: 300,
  },
  scrollbar: {
    WebkitScrollbarTrack: {
      background: "#ffffff",
    },
    WebkitScrollbarThumb: {
      background: "#888",
    },
  },
  item: {
    "&:hover": {
      opacity: 0.8,
    },
  },
}));

export interface NotificationsPopperProps {
  // extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  // extends Omit<PopperProps, "children"> {
  info;
  open;
  anchorRef;
  handleClose;
}

export const NotificationsPopper = ({
  anchorRef,
  info,
  handleClose,
  open,
  ...rest
}: NotificationsPopperProps) => {
  const classes = useStyles();
  return (
    <>
      {anchorRef && (
        <Popper
          open={open}
          transition
          disablePortal
          anchorEl={anchorRef.current}
          {...rest}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper id="menu-list-grow">
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList className={clsx(classes.list, classes.scrollbar)}>
                    <MenuItem onClick={handleClose} disabled>
                      <ListSubheader
                        component="div"
                        className={classes.subheader}
                      >
                        {info}
                      </ListSubheader>
                    </MenuItem>
                    <ListItem className={classes.item}>
                      <ListItemAvatar>
                        <Avatar>MF</Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="New Follow"
                        secondary="Matias Febles started following you."
                      />
                    </ListItem>
                    <ListItem className={classes.item}>
                      <ListItemAvatar>
                        <Avatar>
                          <ThumbUpIcon fontSize="small" />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="New Like"
                        secondary="Martin Kuperman liked your project."
                      />
                    </ListItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      )}
    </>
  );
};
