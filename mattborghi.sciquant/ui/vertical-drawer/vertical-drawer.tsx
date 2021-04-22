import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Drawer } from "@material-ui/core";

import { VerticalStepper } from "@mattborghi/sciquant.ui.vertical-stepper";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 240,
  },
}));

export type VerticalDrawerProps = {
  open: boolean;
  data;
  onStepClick;
};

export function VerticalDrawer({
  open,
  data,
  onStepClick,
}: VerticalDrawerProps) {
  const classes = useStyles();
  return (
    <Drawer
      variant="persistent"
      anchor="right"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <VerticalStepper data={data} onStepClick={onStepClick} />
    </Drawer>
  );
}
