import React from "react";
import { ToggleTheme } from "./toggle-theme";
import { Paper } from "@material-ui/core";
import { MenuNotifications } from "@mattborghi/sciquant.ui.menu-notifications";

export const BasicToggleTheme = () => (
  <ToggleTheme>
    <Paper>
      <MenuNotifications info="Notifications" />
    </Paper>
  </ToggleTheme>
);
