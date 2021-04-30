import React, { useState } from "react";
import { SignUp } from "./sign-up";

import { logo, secondaryLogo } from "@mattborghi/sciquant.utils.logo";
import { ToggleTheme } from "@mattborghi/sciquant.themes.toggle-theme";

// sets the Component preview in gallery view
export const BasicSignUp = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const [loading, setLoading] = useState(false); // simulate submit

  return (
    <SignUp
      logo={logo}
      secondaryLogo={secondaryLogo}
      onSubmit={() => setLoading((prev) => !prev)}
      onGoBack={() => console.log("go back")}
      username={email}
      onChangeUsername={setEmail}
      firstName={firstName}
      onChangeFirstName={setFirstName}
      lastName={lastName}
      onChangeLastName={setLastName}
      password={password}
      onChangePassword={setPassword}
      newPassword={newPassword}
      onChangeNewPassword={setNewPassword}
      remember={remember}
      onChangeRemember={setRemember}
      loading={loading}
      error={false}
    />
  );
};

export const ThemeSignUp = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const [loading, setLoading] = useState(false); // simulate submit

  return (
    <ToggleTheme>
      <SignUp
          logo={logo}
          secondaryLogo={secondaryLogo}
          onSubmit={() => setLoading((prev) => !prev)}
          onGoBack={() => console.log("go back")}
          username={email}
          onChangeUsername={setEmail}
          firstName={firstName}
          onChangeFirstName={setFirstName}
          lastName={lastName}
          onChangeLastName={setLastName}
          password={password}
          onChangePassword={setPassword}
          newPassword={newPassword}
          onChangeNewPassword={setNewPassword}
          remember={remember}
          onChangeRemember={setRemember}
          loading={loading}
          error={false}
        />
    </ToggleTheme>
  );
};
