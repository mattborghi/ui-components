import React, { useState } from "react";
import { MiniAppBar } from "./mini-app-bar";

import WidgetsIcon from "@material-ui/icons/Widgets";

// sets the Component preview in gallery view
export const BasicMiniAppBar = () => {
  const [collapse, setCollapse] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setCollapse((prev) => !prev)}>
        Collapse Mode: {collapse ? "ON" : "OFF"}
      </button>
      <MiniAppBar
        logo={<WidgetsIcon />}
        title="Title"
        collapse={collapse}
        open={open}
        onClick={() => setOpen((prev) => !prev)}
      />
    </>
  );
};

export const NoButtonMiniAppBar = () => {
  return (
    <MiniAppBar
      logo={<WidgetsIcon />}
      title="Title"
      // collapse={false} -> default
    />
  );
};

export const OnlyButtonMiniAppBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MiniAppBar
        logo={<WidgetsIcon />}
        title="Title"
        collapse
        open={open}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div style={{ width: "100%", background: "LightBlue" }}>
          <p>Some Text!</p>
        </div>
      )}
    </>
  );
};
