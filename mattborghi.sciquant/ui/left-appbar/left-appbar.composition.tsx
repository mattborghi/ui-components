import React, { useState } from "react";
import { LeftAppbar } from "./left-appbar";

// sets the Component preview in gallery view
export const BasicLeftAppbar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  return (
    <>
      <button
        style={{ marginBottom: 20 }}
        onClick={() => setToggleSidebar((state) => !state)}
      >
        toggleSidebar
      </button>
      <br />
      <LeftAppbar
        toggleSidebar={toggleSidebar}
        onLeftToggle={() => null}
        onRightToggle={() => null}
        onGoHome={() => null}
      />
    </>
  );
};

export const LeftButtonAppbar = () => {
  const [value, setValue] = useState(false);
  return (
    <>
      <p>Pressed Left Button: {value.toString()}</p>
      <br />
      <LeftAppbar
        toggleSidebar={value}
        onLeftToggle={() => setValue((preValue) => !preValue)}
        onRightToggle={() => null}
        onGoHome={() => null}
      />
    </>
  );
};
