import React from "react";
import { ListProjects } from "./list-projects";

// sets the Component preview in gallery view
export const BasicListProjects = () => {
  const data = {
    projects: [
      { id: "1", title: "First Project" },
      { id: "123", title: "Another Project" },
    ],
  };
  return (
    <ListProjects
      onOpen={(p) => console.log(`Opening project: ${p.title}`)}
      data={data}
      loading={false}
      error={false}
      onRename={(p) => console.log(`Renaming project: ${p.title}`)}
      onDelete={(p) => console.log(`Deleting project: ${p.title}`)}
    />
  );
};

export const EmptyListProjects = () => {
  const data = {
    projects: [],
  };
  return (
    <ListProjects
      onOpen={() => null}
      data={data}
      loading={false}
      error={false}
      onRename={() => null}
      onDelete={() => null}
    />
  );
};

export const OnErrorListProjects = () => {
  const data = {
    projects: [],
  };
  return (
    <ListProjects
      onOpen={() => null}
      data={data}
      loading={false}
      error={{ message: "There was an error!" }}
      onRename={() => null}
      onDelete={() => null}
    />
  );
};
