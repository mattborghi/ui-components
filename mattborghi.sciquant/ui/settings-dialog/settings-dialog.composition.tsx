import React, { useState } from "react";
import { SettingsDialog } from "./settings-dialog";

// sets the Component preview in gallery view
export const BasicSettingsDialog = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(true);
  return (
    <>
      <button onClick={() => setOpen((state) => !state)}>Dummy</button>
      <h3>Theme: {theme ? "dark" : "light"}</h3>
      <SettingsDialog
        open={open}
        theme={theme}
        onClose={() => setOpen(false)}
        onChangeTheme={() => setTheme((prevTheme) => !prevTheme)}
        loadingSettings={false}
        onCloseSettings={() => setOpen(false)}
        updateSettings={() => null}
        settingId={null}
      />
    </>
  );
};
