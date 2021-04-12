import React from "react";

const menuWidth = 250;

import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import {
  Typography,
  ListSubheader,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
// Icons
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpIcon from "@material-ui/icons/Help";
import LockIcon from "@material-ui/icons/Lock";

const useStyles = makeStyles((theme) => ({
  subheader: {
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    paddingLeft: 10,
  },
}));

export interface UserMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  anchorRef;
  handleClose;
  handleSignout;
  onOpenSettings;
}

export const UserMenu = ({
  open,
  anchorRef,
  handleClose,
  handleSignout,
  onOpenSettings,
  ...rest
}: UserMenuProps) => {
  const classes = useStyles();
  const data = [
    { onClick: handleClose, icon: <AccountCircleIcon />, text: "My Account" },
    { onClick: onOpenSettings, icon: <SettingsIcon />, text: "Settings" },
    { onClick: handleClose, icon: <HelpIcon />, text: "Support" },
    { onClick: handleClose, icon: <LockIcon />, text: "Lock Screen" },
    { onClick: handleSignout, icon: <ExitToAppIcon />, text: "Log out" },
  ];
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
                maxWidth: menuWidth,
              }}
            >
              <Paper id="menu-list-grow">
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList>
                    <MenuItem disabled>
                      <ListSubheader
                        component="div"
                        className={classes.subheader}
                      >
                        Welcome!
                      </ListSubheader>
                    </MenuItem>
                    {data.map(({ onClick, icon, text }) => (
                      <MenuItem key={text} onClick={onClick}>
                        {icon}
                        <Typography className={classes.text}>{text}</Typography>
                      </MenuItem>
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
