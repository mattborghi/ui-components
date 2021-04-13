import React from "react";
import { ProjectPage } from "./project-page";

// sets the Component preview in gallery view
export const BasicProjectPage = () => {
  return (
    <ProjectPage
      version={`${new Date().getFullYear()}.0.1`}
      logo="https://2tjosk2rxzc21medji3nfn1g-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/thumbnail-logo-color-icon.svg"
      onOpenProject={() => null}
      onNewProject={() => null}
    />
  );
};
