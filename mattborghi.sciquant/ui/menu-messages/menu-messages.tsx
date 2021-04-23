import React, { useState, useRef } from "react";

import { MessagesPopper } from "@mattborghi/sciquant.ui.messages-popper";
import { MessagesButton } from "@mattborghi/sciquant.ui.messages-button";

export interface MenuMessagesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  info: string;
}

export const MenuMessages = ({ info }: MenuMessagesProps) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

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
      <MessagesButton ref={anchorRef} onClick={handleToggle} />
      <MessagesPopper
        open={open}
        info={info}
        anchorRef={anchorRef}
        handleClose={handleClose}
      />
    </>
  );
};
