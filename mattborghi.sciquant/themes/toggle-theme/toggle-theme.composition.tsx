import React from "react";
import { ToggleTheme } from "./toggle-theme";

import { MenuNotifications } from "@mattborghi/sciquant.ui.menu-notifications";

export const BasicToggleTheme = () => (
  <ToggleTheme>
    <MenuNotifications info="Notifications" />
  </ToggleTheme>
);
