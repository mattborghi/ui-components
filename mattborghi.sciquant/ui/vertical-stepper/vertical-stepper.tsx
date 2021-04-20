import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  ListSubheader,
  Grid,
  Stepper,
  Step,
  Typography,
  StepButton,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  whole: {
    width: "100%",
    marginLeft: 10,
    paddingLeft: 10,
  },
  content: {
    fontStyle: "regular",
    fontSize: 11,
    textAlign: "left",
  },
  label: {
    fontSize: 15,
    fontStyle: "bold",
    textAlign: "left",
  },
  toolbar: theme.mixins.toolbar,
}));

export interface VerticalStepperProps
  extends React.HTMLAttributes<HTMLDivElement> {
  data;
  onStepClick;
}

export const VerticalStepper = ({
  data,
  onStepClick,
  ...rest
}: VerticalStepperProps) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="flex-start"
    >
      <div className={classes.toolbar} />
      <ListSubheader component="div" disableSticky>
        NAVIGATION PANEL
      </ListSubheader>
      <Stepper
        // set activeStep to a very large number so all the steps are active and we can click on them.
        activeStep={999}
        orientation="vertical"
        className={classes.whole}
      >
        {data &&
          data.map(({ title, description }, index) => (
            <Step key={title} completed={false}>
              <StepButton onClick={() => onStepClick(index)}>
                <Typography className={classes.label}>{title}</Typography>
                <Typography className={classes.content}>
                  {description}
                </Typography>
              </StepButton>
            </Step>
          ))}
      </Stepper>
    </Grid>
  );
};
