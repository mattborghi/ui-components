import React, { useRef } from "react";
import { Grid } from "@material-ui/core";
import { UserButton } from "./user-button";

const user = {
  firstName: "John",
  lastName: "Doe",
  username: "john.doe",
  job: "Worker",
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

export const LargeNameUserButton = ({ ...props }) => {
  const large_user = {
    firstName: "Johnaolfnoqenfoqen",
    lastName: "Doeadfjnhqoefnhqoef",
    username: "john.doe",
    job:
      "a vary large job position afagqnegoqfgnoaiefgnaoifvnoqifnoqeincoandfvoadnvcloadnvaldnfvolanvqe",
  };
  return (
    <UserButton
      user={large_user}
      onClick={() => console.log("asd")}
      {...props}
    />
  );
};