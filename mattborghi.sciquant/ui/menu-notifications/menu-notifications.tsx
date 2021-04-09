import React, { useState, useRef } from "react";

import { NotificationsPopper } from "@mattborghi/sciquant.ui.notifications-popper";
import { NotificationsButton } from "@mattborghi/sciquant.ui.notifications-button";

export interface MenuNotificationsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  info: string;
}

export const MenuNotifications = ({
  info,
  ...rest
}: MenuNotificationsProps) => {
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);

  function handleToggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }
  return (
    <>
      <NotificationsButton ref={anchorRef} onClick={handleToggle} />
      <NotificationsPopper
        open={open}
        info={info}
        anchorRef={anchorRef}
        handleClose={handleClose}
      />
    </>
  );
};
