import React, { useState, useRef } from "react";
import { UserMenu } from "./user-menu";

// sets the Component preview in gallery view
export const BasicUserMenu = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  return (
    <>
      <button onClick={() => setOpen((state) => !state)} ref={anchorRef}>
        Dummy
      </button>
      <UserMenu
        open={open}
        anchorRef={anchorRef}
        handleClose={() => null}
        handleSignout={() => null}
        onOpenSettings={() => null}
      />
    </>
  );
};
