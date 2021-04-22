import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Avatar,
  Typography,
} from "@material-ui/core";

import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";

import { Loading } from "@mattborghi/sciquant.extras.loading";
import { Error } from "@mattborghi/sciquant.extras.error";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    textTransform: "none",
  },
  subheader: {
    fontSize: 20,
  },
  text: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    marginLeft: theme.spacing(1),
  },
  lista: {
    background: theme.palette.background.paper,
    height: "100%",
    maxHeight: "100%",
    overflow: "auto",
  },
  listItem: {
    "&:hover $listItemSecondaryAction": {
      visibility: "inherit",
    },
  },
  listItemSecondaryAction: {
    visibility: "hidden",
  },
}));

export interface ListProjectsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  data;
  loading;
  error;
  onOpen;
  onRename;
  onDelete;
}

export const ListProjects = ({
  data,
  loading,
  error,
  onOpen,
  onRename,
  onDelete,
  ...rest
}: ListProjectsProps) => {
  const classes = useStyles();

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <List
      subheader={
        <ListSubheader component="div" className={classes.subheader}>
          Recent Projects
        </ListSubheader>
      }
      className={classes.lista}
    >
      {data && data.projects.length !== 0 ? (
        data.projects.map((project) => (
          <ListItem
            button
            key={project.id}
            onClick={() => onOpen(project)}
            className={classes.root}
            classes={{
              container: classes.listItem,
            }}
          >
            <Avatar>
              <FolderIcon />
            </Avatar>
            <ListItemText
              primary={
                <Typography color="textPrimary" className={classes.text}>
                  {project.title}
                </Typography>
              }
              secondary={
                <Typography color="textSecondary" className={classes.text}>
                  {"~/Projects/" + project.title + "/"}
                </Typography>
              }
            />
            <ListItemSecondaryAction
              className={classes.listItemSecondaryAction}
            >
              <IconButton
                aria-label="rename"
                id="btn-transparent"
                edge="end"
                onClick={() => onRename(project)}
              >
                <CreateIcon />
              </IconButton>
              <IconButton
                aria-label="remove"
                id="btn-transparent"
                edge="end"
                onClick={() => onDelete(project)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))
      ) : (
        <Typography className={classes.text}>
          You have no recent projects to show
        </Typography>
      )}
    </List>
  );
};
