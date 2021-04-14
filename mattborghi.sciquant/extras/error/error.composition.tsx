import React from "react";
import { Error } from "./error";

// sets the Component preview in gallery view
export const BasicError = () => {
  const error = { message: "There was an error!" };
  return <Error error={error} />;
};
