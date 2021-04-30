import React, { useState } from "react";
import { SignIn } from "./sign-in";

import { logo, secondaryLogo } from "@mattborghi/sciquant.utils.logo";
import { ToggleTheme } from "@mattborghi/sciquant.themes.toggle-theme";

// sets the Component preview in gallery view
export const BasicSignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false); // simulate submit
  return (
    <>
      <h3>Username: {username}</h3>
      <h3>Password: {password}</h3>
      <SignIn
        logo={logo}
        secondaryLogo={secondaryLogo}
        username={username}
        onChangeUsername={setUsername}
        password={password}
        onChangePassword={setPassword}
        loading={loading}
        error={false}
        onSubmit={() => setLoading((prev) => !prev)}
        onRegister={() => null}
        onNewPassword={() => null}
      />
    </>
  );
};

export const ThemeSignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false); // simulate submit
  return (
    <ToggleTheme>
      <h3>Username: {username}</h3>
      <h3>Password: {password}</h3>
      <SignIn
        logo={logo}
        secondaryLogo={secondaryLogo}
        username={username}
        onChangeUsername={setUsername}
        password={password}
        onChangePassword={setPassword}
        loading={loading}
        error={false}
        onSubmit={() => setLoading((prev) => !prev)}
        onRegister={() => null}
        onNewPassword={() => null}
      />
    </ToggleTheme>
  );
};
