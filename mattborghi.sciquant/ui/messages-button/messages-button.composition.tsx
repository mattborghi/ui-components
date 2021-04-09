import React, { useRef } from "react";
import { MessagesButton } from "./messages-button";

// sets the Component preview in gallery view
export const BasicMessagesButton = ({ ...props }) => {
  return <MessagesButton onClick={() => console.log("asd")} {...props} />;
};

export const RefMessagesButton = ({ ...props }) => {
  const anchorRef = useRef(null);
  return (
    <MessagesButton
      ref={anchorRef}
      onClick={() => console.log(anchorRef)}
      {...props}
    />
  );
};
