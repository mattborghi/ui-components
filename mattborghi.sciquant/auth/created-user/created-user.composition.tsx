import React, { useState } from "react";
import { CreatedUser } from "./created-user";

// sets the Component preview in gallery view
export const BasicCreatedUser = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Dialog</button>
      <br />
      <CreatedUser
        open={open}
        onGoBack={() => setOpen(false)}
        username="John Doe"
      />
    </>
  );
};
