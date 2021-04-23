import React, { useState } from "react";
import { CustomAppbar } from "./custom-appbar";

import { UserButton } from "@mattborghi/sciquant.ui.user-button";
import { MenuMessages } from "@mattborghi/sciquant.ui.menu-messages";
import { MenuNotifications } from "@mattborghi/sciquant.ui.menu-notifications";
import { ToggleTheme } from "@mattborghi/sciquant.themes.toggle-theme";

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

export const LargeTitleCustomAppbar = () => {
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
      title="This is a rather very large title that you can't read completely"
    />
  );
};

export const OverloadRightCustomAppbar = () => {
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
        <>
          <MenuMessages info="Messages" />
          <MenuNotifications info="Notifications" />
          <UserButton
            user={{
              firstName: "Johnafagag",
              lastName: "Doeadgagadg",
              username: "john.doeagagasdgas",
              job: "adfagsfghwrgwrg64afafadgf8",
            }}
          />
        </>
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

export const ThemingCustomAppbar = () => {
  return (
    <ToggleTheme>
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
            user={{
              firstName: "John",
              lastName: "Doe",
              username: "john.doe",
            }}
          />
        }
      />
    </ToggleTheme>
  );
};
