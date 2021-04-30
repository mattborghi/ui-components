import React, { useState } from "react";
import { RecoverPassword } from "./recover-password";
import { ToggleTheme } from "@mattborghi/sciquant.themes.toggle-theme";

import { logo, secondaryLogo } from "@mattborghi/sciquant.utils.logo";
  
// sets the Component preview in gallery view
export const BasicRecoverPassword = () => {
  const [username, setUsername] = useState("");

  return (
    <RecoverPassword
      logo={logo}
      secondaryLogo={secondaryLogo}
      username={username}
      onChangeUsername={setUsername}
      onGoBack={() => console.log("going back")}
      onChangePassword={() => console.log("changing password")}
    />
  );
};


export const ThemeRecoverPassword = () => {
  const [username, setUsername] = useState("");

  return (
    <ToggleTheme>
      <RecoverPassword
        logo={logo}
        secondaryLogo={secondaryLogo}
        username={username}
        onChangeUsername={setUsername}
        onGoBack={() => console.log("going back")}
        onChangePassword={() => console.log("changing password")}
      />
    </ToggleTheme>
  );
};