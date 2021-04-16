import React from "react";

// Material helpers
import { makeStyles } from "@material-ui/core";

// Material components
import { Typography } from "@material-ui/core";

// Component styles
const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: "150px",
    textAlign: "center",
    padding: theme.spacing(7),
    background: "linear-gradient(to top, #424242 0%, #3a3939 100%)",
    borderRadius: 10,
    boxShadow: "0 0 35px 0 rgba(49, 57, 66, 0.5)",
  },
  image: {
    display: "inline-block",
    marginTop: "50px",
    height: "140px",
  },
  title: {
    marginTop: "2.25rem",
    margin: "10px 0",
  },
  subtitle: {
    color: "#98a6ad",
  },
}));

export interface MaintenanceProps extends React.HTMLAttributes<HTMLDivElement> {
  logo;
}

export const Maintenance = ({ logo, ...rest }: MaintenanceProps) => {
  const classes = useStyles();
  return (
    <div className={classes.content} {...rest}>
      <img alt="Under development" className={classes.image} src={logo} />
      <Typography variant="h5" className={classes.title}>
        Page Under Development
      </Typography>
      <Typography variant="subtitle2" className={classes.subtitle}>
        We are still developing this page, sorry for the inconvenience.
      </Typography>
    </div>
  );
};
