import React, { useState, useRef } from "react";
import { MessagesPopper } from "./messages-popper";

// sets the Component preview in gallery view
export const BasicMessagesPopper = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  return (
    <>
      <button onClick={() => setOpen((state) => !state)} ref={anchorRef}>
        Dummy
      </button>
      <MessagesPopper
        info="Notifications"
        open={open}
        anchorRef={anchorRef}
        handleClose={() => null}
      />
    </>
  );
};
