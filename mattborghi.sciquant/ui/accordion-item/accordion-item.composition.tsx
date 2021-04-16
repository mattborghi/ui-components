import React from "react";
import { AccordionItem } from "./accordion-item";
import AddIcon from "@material-ui/icons/Add";
// sets the Component preview in gallery view
export const BasicAccordionItem = () => {
  return (
    <AccordionItem
      title="Title"
      description="Some description"
      divider
      patternCodes="asd"
      additionalInfo="Lorem ipsum `\sum 1+1` dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      onClick={() => null}
      icon={
        <AddIcon />
        // <img
        //   height="30px"
        //   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCbIOafUaRohL3ALeTyK7048iFPz18Gg2h0A&usqp=CAU"
        // />
      }
    />
  );
};

export const PlotAccordionItem = () => {
  return (
    <AccordionItem
      title="Title"
      description="Some description"
      divider
      patternCodes="1+1"
      onClick={() => null}
      icon={<AddIcon />}
      plot={
        <div style={{ height: "500px", background: "red" }}>
          <p>Hello</p>
        </div>
      }
    />
  );
};
