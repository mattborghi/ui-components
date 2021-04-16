import React from "react";
import { PreviewPattern } from "./preview-pattern";

import MathJax from "react-mathjax-preview";
// import "prop-types";

// sets the Component preview in gallery view
export const BasicPreviewPattern = () => {
  return (
    <PreviewPattern
      title="Title"
      code="1+1"
      additionalInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    />
  );
};

export const TeXPreviewPattern = () => {
  const asciimath = "`sum_(i=1)^n i^3=((n(n+1))/2)^2`";
  return (
    <PreviewPattern
      title="Title"
      code="1+1"
      additionalInfo={<MathJax math={asciimath} />}
    />
  );
};

export const RightPreviewPattern = () => {
  const asciimath = "`sum_(i=1)^n i^3=((n(n+1))/2)^2`";
  return (
    <PreviewPattern
      title="Title"
      code="1+1"
      additionalInfo={<MathJax math={asciimath} />}
      plot={
        <div
          style={{ minHeight: "500px", background: "red", textAlign: "center" }}
        >
          <p>Some other text</p>
        </div>
      }
    />
  );
};

export const CenterRightPreviewPattern = () => {
  const asciimath =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `sum_(i=1)^n i^3=((n(n+1))/2)^2`";
  return (
    <PreviewPattern
      title="Title"
      code="1+1"
      additionalInfo={<MathJax math={asciimath} />}
      plot={
        <div
          style={{ minHeight: "50px", background: "red", textAlign: "center" }}
        >
          <p>Some other text</p>
        </div>
      }
    />
  );
};
