import React, { useState } from "react";

// material-ui styles
import { makeStyles } from "@material-ui/core/styles";

// material-ui core
import { Typography } from "@material-ui/core";

//material-ui lab
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";

// icons
import CheckCircleTwoToneIcon from "@material-ui/icons/CheckCircleTwoTone";
import RadioButtonUncheckedTwoToneIcon from "@material-ui/icons/RadioButtonUncheckedTwoTone";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "flex",
    justifyContent: "flex-start",
  },
  text: {
    marginLeft: 10,
    textTransform: "none",
  },
  help: {
    textAlign: "center",
  },
  group: {
    maxWidth: "100%",
  },
}));

export interface InputsListProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Title */
  title: string;
  /** Data array */
  data;
  /** Access selected item */
  onChange?;
  /** Display message to show when there is empty data passed */
  empty?: string;
  /** Selects the first element by default */
  active?: boolean;
}

export const InputsList = ({
  title,
  data,
  onChange = () => null,
  empty = "No items to show",
  active = false,
  ...rest
}: InputsListProps) => {
  const classes = useStyles();
  const [view, setView] = useState(active ? data[0].name : "");

  return (
    <>
      <h3 className="title">{title}</h3>
      <ToggleButtonGroup
        className={classes.group}
        orientation="vertical"
        value={view}
        exclusive
        onChange={(e, elem) => setView(elem)}
      >
        {data && data.length > 0 ? (
          data.map((element) => (
            <ToggleButton
              className={classes.button}
              value={element.name}
              key={element.id}
              aria-label={element.name}
              onClick={() => onChange(element)}
            >
              {element.name === view ? (
                <CheckCircleTwoToneIcon />
              ) : (
                <RadioButtonUncheckedTwoToneIcon />
              )}
              <Typography noWrap color="textPrimary" className={classes.text}>
                {element.name}
              </Typography>
            </ToggleButton>
          ))
        ) : (
          <Typography className={classes.help} color="textSecondary">
            {empty}
          </Typography>
        )}
      </ToggleButtonGroup>
    </>
  );
};
