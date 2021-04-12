import React from "react";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  field: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center",
  },
}));

import {
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Switch,
  CircularProgress,
} from "@material-ui/core";

export interface SettingsDialogProps
  extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose;
  theme: boolean;
  onChangeTheme;
  settingId;
  loadingSettings;
  onCloseSettings;
  updateSettings;
}

export const SettingsDialog = ({
  open,
  onClose,
  theme,
  onChangeTheme,
  settingId,
  loadingSettings,
  onCloseSettings,
  updateSettings,
  ...rest
}: SettingsDialogProps) => {
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
      disableBackdropClick
      maxWidth={"sm"}
      fullWidth
      style={{ position: "absolute", top: 0, left: "21%" }}
    >
      <DialogTitle id="form-dialog-title" style={{ height: 40 }}>
        Settings
      </DialogTitle>
      <DialogContent>
        <div className={classes.field}>
          <Switch id="switch" checked={theme} onChange={onChangeTheme} />
          <div>
            <Typography variant="body1" color="inherit">
              {theme ? "Dark Theme: On" : "Dark Theme: Off"}
            </Typography>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button color="inherit" onClick={onCloseSettings}>
          Cancel
        </Button>
        {!loadingSettings ? (
          <Button
            color="inherit"
            onClick={() =>
              updateSettings({
                variables: {
                  settingId: settingId,
                  darkTheme: theme,
                },
              })
            }
          >
            Save
          </Button>
        ) : (
          <CircularProgress size={24} />
        )}
      </DialogActions>
    </Dialog>
  );
};
