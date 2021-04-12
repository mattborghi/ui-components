import React, { useRef } from "react";
import { UserButton } from "./user-button";

const user = {
  firstName: "John",
  lastName: "Doe",
  username: "john.doe",
};

// sets the Component preview in gallery view
export const BasicUserButton = ({ ...props }) => {
  return (
    <UserButton user={user} onClick={() => console.log("asd")} {...props} />
  );
};

export const RefUserButton = ({ ...props }) => {
  const anchorRef = useRef(null);
  return (
    <UserButton
      ref={anchorRef}
      user={user}
      onClick={() => console.log(anchorRef)}
      {...props}
    />
  );
};
