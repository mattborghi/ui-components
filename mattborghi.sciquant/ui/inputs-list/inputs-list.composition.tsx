import React from "react";
import { InputsList } from "./inputs-list";

// sets the Component preview in gallery view
export const BasicInputsList = () => {
  const data = [
    { name: "Some name", id: 1 },
    { name: "Another name", id: 2 },
  ];

  return (
    <InputsList
      title="Some title"
      data={data}
      onChange={(e) => console.log(e)}
    />
  );
};

export const EmptyInputsList = () => {
  return <InputsList title="Some title" data={[]} />;
};

export const VeryLongInputsList = () => {
  const data = [
    {
      name:
        "Some name that is very long so it can overflow a little bit. Now I am writing stuff for the sake of it, lorem ipsum.",
      id: 1,
    },
    { name: "Another name", id: 2 },
  ];
  return (
    <InputsList
      title="Some title"
      data={data}
      onChange={(e) => console.log(e)}
    />
  );
};

export const ActiveInputsList = () => {
  const data = [
    { name: "Some name", id: 1 },
    { name: "Another name", id: 2 },
  ];

  return (
    <InputsList
      active
      title="Some title"
      data={data}
      onChange={(e) => console.log(e)}
    />
  );
};
