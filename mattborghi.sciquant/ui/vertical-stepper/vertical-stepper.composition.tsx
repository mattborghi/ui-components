import React from "react";
import { VerticalStepper } from "./vertical-stepper";

// sets the Component preview in gallery view
export const BasicVerticalStepper = () => {
  const data = [
    { title: "Title 1", description: "Description to title 1" },
    { title: "Title 2", description: "Description to title 2" },
  ];
  return (
    <VerticalStepper data={data} onStepClick={() => console.log("click!")} />
  );
};
