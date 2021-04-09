import React, { useState, useRef } from "react";
import { NotificationsPopper } from "./notifications-popper";

// sets the Component preview in gallery view
export const BasicNotificationsPopper = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  return (
    <>
      <button onClick={() => setOpen((state) => !state)} ref={anchorRef}>
        Dummy
      </button>
      <NotificationsPopper
        info="Notifications"
        open={open}
        anchorRef={anchorRef}
        handleClose={() => null}
      />
    </>
  );
};
