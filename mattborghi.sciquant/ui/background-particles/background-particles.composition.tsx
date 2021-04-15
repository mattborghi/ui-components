import React, { useEffect } from "react";
import { BackgroundParticles } from "./background-particles";

// sets the Component preview in gallery view
export const BasicBackgroundParticles = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "LightBlue";
  }, []);
  return <BackgroundParticles />;
};
