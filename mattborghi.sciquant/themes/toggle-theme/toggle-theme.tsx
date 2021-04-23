import React, { useState } from "react";

import { SetTheme } from "@mattborghi/sciquant.themes.set-theme";

export type ToggleThemeProps = {
  children;
};

export function ToggleTheme({ children }: ToggleThemeProps) {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <>
      <button onClick={() => setDarkTheme((prev) => !prev)}>
        Toggle theme
      </button>
      <SetTheme darkTheme={darkTheme}>{children}</SetTheme>
    </>
  );
}
