import React from "react";
import { CustomAppbar } from "./custom-appbar";

import { UserButton } from "@mattborghi/sciquant.ui.user-button";

// sets the Component preview in gallery view
export const OnlyRightCustomAppbar = () => {
  return (
    <CustomAppbar
      logo={
        <img
          src={
            "https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/5e203eaed5d2b00c172c6fe5_linkedin-logo.svg"
          }
          height={50}
          width={100}
        />
      }
      right={
        <UserButton
          user={{ firstName: "John", lastName: "Doe", username: "john.doe" }}
        />
      }
    />
  );
};

export const NoLogoCustomAppbar = () => {
  return (
    <CustomAppbar
      left={
        <UserButton
          user={{ firstName: "John", lastName: "Doe", username: "john.doe" }}
        />
      }
      right={
        <UserButton
          user={{ firstName: "John", lastName: "Doe", username: "john.doe" }}
        />
      }
    />
  );
};

export const BasicCustomAppbar = () => {
  return (
    <CustomAppbar
      logo={
        <img
          src={
            "https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/5e203eaed5d2b00c172c6fe5_linkedin-logo.svg"
          }
          height={50}
          width={100}
        />
      }
      right={
        <UserButton
          user={{ firstName: "John", lastName: "Doe", username: "john.doe" }}
        />
      }
      left={
        <UserButton
          user={{ firstName: "John", lastName: "Doe", username: "john.doe" }}
        />
      }
      title="Title"
    />
  );
};
