import React, { useState } from "react";
import { ModelCreated } from "./model-created";

// sets the Component preview in gallery view
export const BasicModelCreated = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <ModelCreated open={open} onClose={() => setOpen(false)} />
    </>
  );
};
