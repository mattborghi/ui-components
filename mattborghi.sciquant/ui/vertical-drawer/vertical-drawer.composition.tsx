import React, { useState } from "react";
import { VerticalDrawer } from "./vertical-drawer";

export const BasicVerticalDrawer = () => {
  const [open, setOpen] = useState(false);
  const data = [
    { title: "Title 1", description: "Description to title 1" },
    { title: "Title 2", description: "Description to title 2" },
  ];
  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <VerticalDrawer open={open} data={data} onStepClick={() => null} />
    </>
  );
};
