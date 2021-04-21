import React from "react";
import { LinearLoader } from "./linear-loader";

// sets the Component preview in gallery view
export const BasicLinearLoader = () => {
  return <LinearLoader setFinish={() => null} />;
};
