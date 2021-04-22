import React from "react";
// styles
import {makeStyles} from "@material-ui/core/styles"
// components
import { Button } from "@material-ui/core";
// Icons
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import VerticalSplitIcon from "@material-ui/icons/VerticalSplit";

const useStyles = makeStyles((theme) => ({
  div: {
    display: "inline-block",
    whiteSpace: "nowrap",
  },
}));

export interface LeftAppbarProps extends React.HTMLAttributes<HTMLDivElement> {
  toggleSidebar: boolean;
  onGoHome;
  onLeftToggle;
  onRightToggle;
}

export const LeftAppbar = ({
  toggleSidebar,
  onGoHome,
  onLeftToggle,
  onRightToggle,
  ...rest
}: LeftAppbarProps) => {
  const classes = useStyles();
  return (
    <div className={classes.div}>
      <Button id="btn-transparent" onClick={onLeftToggle}>
        {!toggleSidebar ? (
          <MenuIcon color="inherit" />
        ) : (
          <KeyboardArrowLeftIcon color="inherit" />
        )}
      </Button>
      <Button id="btn-transparent" onClick={onGoHome}>
        <HomeIcon color="inherit" />
      </Button>
      <Button id="btn-transparent" onClick={onRightToggle}>
        <VerticalSplitIcon color="inherit" />
      </Button>
    </div>
  );
};
