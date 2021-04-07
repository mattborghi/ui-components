import React from 'react';

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
  Avatar
} from "@material-ui/core";

import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const useStyles = makeStyles(theme => ({
  subheader: {
    fontSize: 16,
    fontWeight: "bold"
  },
  list: {
    maxHeight: 250,
    overflow: "auto",
    maxWidth: 300
  },
  scrollbar: {
    WebkitScrollbarTrack: {
      background: "#ffffff"
    },
    WebkitScrollbarThumb: {
      background: "#888"
    }
  },
  item: {
    "&:hover": {
      backgroundColor: "rgb(85,85,85)"
    }
  }
}));

export const NotificationsPopper = ({ children, anchorRef, info, open, handleClose, ...rest }) => {
  const classes = useStyles();
  return (
    <>
      { anchorRef &&
        <Popper open={open} transition disablePortal anchorEl={anchorRef.current}>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
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
                        <Avatar className={classes.avatar}>MF</Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="New Follow"
                        secondary="Matias Febles started following you."
                      />
                    </ListItem>
                    <ListItem className={classes.item}>
                      <ListItemAvatar>
                        <Avatar className={classes.avatar}>
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
      }</>
  )
};