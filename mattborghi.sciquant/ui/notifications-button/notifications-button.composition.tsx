import React, { useRef } from "react";
import { NotificationsButton } from "./notifications-button";

// sets the Component preview in gallery view
export const BasicNotificationsButton = ({ ...props }) => {
  return <NotificationsButton onClick={() => console.log("asd")} {...props} />;
};

export const RefNotificationsButton = ({ ...props }) => {
  const anchorRef = useRef(null);
  return (
    <NotificationsButton
      ref={anchorRef}
      onClick={() => console.log(anchorRef)}
      {...props}
    />
  );
};
