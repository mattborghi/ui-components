import React from "react";

import clsx from "clsx";
import Particles from "react-particles-js";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    minHeight: "100vh",
    maxHeight: "100vh",
    width: "100vw",
  },
  particles1: {
    zIndex: -996,
    top: 0,
    left: 0,
    position: "absolute",
  },
  particles2: {
    zIndex: -997,
    top: 0,
    left: 0,
    position: "absolute",
  },
}));

export interface BackgroundParticlesProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const BackgroundParticles = ({ ...rest }: BackgroundParticlesProps) => {
  const classes = useStyles();
  return (
    <>
      <div className={clsx(classes.particles1, classes.main)}>
        <Particles
          params={{
            retina_detect: false,
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble",
                },
              },
              modes: {
                bubble: {
                  size: 10,
                  distance: 100,
                },
              },
            },
          }}
        />
      </div>
      <div className={clsx(classes.particles2, classes.main)}>
        <Particles
          params={{
            particles: {
              number: {
                value: 60,
                density: {
                  enable: true,
                  value_area: 1500,
                },
              },
              line_linked: {
                enable: true,
                opacity: 0.02,
              },
              move: {
                direction: "right",
                speed: 0.05,
              },
              size: {
                value: 1,
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.05,
                },
              },
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                push: {
                  particles_nb: 1,
                },
              },
            },
            retina_detect: true,
          }}
        />
      </div>
    </>
  );
};
