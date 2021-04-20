import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Typography, Button } from "@material-ui/core";

import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import FolderIcon from "@material-ui/icons/Folder";

const useStyles = makeStyles((theme) => ({
  main: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  pool: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    margin: 0,
    padding: 0,
    listStyle: "none",
  },
  text: {
    textTransform: "none",
    fontSize: 20,
    marginLeft: 30,
  },
  title: {
    paddingBottom: "20px",
  },
  button: {
    height: 50,
    fontSize: 16,
    minWidth: "300px",
    maxWidth: "300px",
  },
}));

export interface ProjectPageProps extends React.HTMLAttributes<HTMLDivElement> {
  logo: string;
  secondaryLogo?: string;
  version: string;
  onOpenProject;
  onNewProject;
}

export const ProjectPage = ({
  logo,
  secondaryLogo,
  version,
  onOpenProject,
  onNewProject,
  ...rest
}: ProjectPageProps) => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <ul className={classes.pool} role="navigation">
        <li className={classes.item}>
          <img src={logo} height="100" width="100" />
        </li>
        <li className={classes.item}>
          {secondaryLogo && <img src={secondaryLogo} height="50" width="200" />}
        </li>
        <li className={classes.item}>
          <Typography color="textSecondary" className={classes.title}>Version {version}</Typography>
        </li>
        <li className={classes.item}>
          <Button
            color="inherit"
            className={classes.button}
            onClick={onNewProject}
            startIcon={<CreateNewFolderIcon />}
          >
            <Typography color="inherit" className={classes.text}>
             New Project
             </Typography>
          </Button>
        </li>
        <li className={classes.item}>
          <Button
            color="inherit"
            className={classes.button}
            onClick={onOpenProject}
            startIcon={<FolderIcon />}
          >
            <Typography color="inherit" className={classes.text}>
              Open Project
            </Typography>
          </Button>
        </li>
      </ul>
    </div>
  );
};
