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
  ClickAwayListener,
} from "@material-ui/core";

import { data } from "./assets/data";

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
      backgroundColor: "rgb(85,85,85)",
    },
  },
}));

export interface MessagesPopperProps {
  info;
  open;
  anchorRef;
  handleClose;
}

export const MessagesPopper = ({
  anchorRef,
  info,
  handleClose,
  open,
  ...rest
}: MessagesPopperProps) => {
  const classes = useStyles();
  return (
    <>
      {anchorRef && (
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          transition
          disablePortal
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
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList className={clsx(classes.list, classes.scrollbar)}>
                    <MenuItem onClick={handleClose} disabled>
                      <ListSubheader
                        component="div"
                        className={classes.subheader}
                      >
                        Messages
                      </ListSubheader>
                    </MenuItem>
                    {data.map((message) => (
                      <ListItem key={message.from} className={classes.item}>
                        {message.image}
                        <ListItemText
                          primary={message.from}
                          secondary={message.message}
                        />
                      </ListItem>
                    ))}
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
