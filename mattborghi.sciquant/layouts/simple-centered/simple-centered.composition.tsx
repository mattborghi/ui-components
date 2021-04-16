import React from "react";
import { SimpleCentered } from "./simple-centered";

import { Maintenance } from "@mattborghi/sciquant.ui.maintenance";

// sets the Component preview in gallery view
export const BasicSimpleCentered = () => {
  return (
    <SimpleCentered>
      <Maintenance logo="https://karac.ch/icon/karac-mobile-application-tools.svg" />
    </SimpleCentered>
  );
};
