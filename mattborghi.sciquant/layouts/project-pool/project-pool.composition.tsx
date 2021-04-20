import React, { useState } from "react";
import { ProjectPool } from "./project-pool";
import { AppBar, Typography, Button, Drawer } from "@material-ui/core";

import { VerticalStepper } from "@mattborghi/sciquant.ui.vertical-stepper";

import { UserButton } from "@mattborghi/sciquant.ui.user-button";
import { CustomAppbar } from "@mattborghi/sciquant.ui.custom-appbar";
import { ProjectPage } from "@mattborghi/sciquant.ui.project-page";
import { ListProjects } from "@mattborghi/sciquant.ui.list-projects";

// sets the Component preview in gallery view
export const BasicProjectPool = () => {
  const header = (
    <AppBar position="static">
      <Typography variant="h3">Header</Typography>
    </AppBar>
  );
  const leftpane = (
    <div style={{ background: "cyan", minHeight: "100%" }}>
      <h2 style={{ margin: 0 }}>LeftPane</h2>
    </div>
  );
  const main = (
    <div
      style={{
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3 style={{ margin: 0 }}>Main Window</h3>
      <img
        src={
          "data:image/png;base64,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"
        }
      />
    </div>
  );
  return (
    <ProjectPool header={header} leftpane={leftpane}>
      {main}
    </ProjectPool>
  );
};

export const CustomProjectPool = () => {
  const projects = {
    projects: [
      { id: "1", title: "First Project" },
      { id: "123", title: "Another Project" },
    ],
  };
  const main = (
    <ProjectPage
      version={`${new Date().getFullYear()}.0.1`}
      logo="https://2tjosk2rxzc21medji3nfn1g-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/thumbnail-logo-color-icon.svg"
      onOpenProject={() => null}
      onNewProject={() => null}
    />
  );
  const leftpane = (
    <ListProjects
      onOpen={() => null}
      data={projects}
      loading={false}
      error={false}
      onRename={() => null}
      onDelete={() => null}
    />
  );
  const header = (
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
  return (
    <ProjectPool header={header} leftpane={leftpane}>
      {main}
    </ProjectPool>
  );
};

export const DrawerProjectPool = () => {
  const [open, setOpen] = useState(false);
  const header = (
    <AppBar position="static" style={{ display: "flex", flexDirection: "row" }}>
      <Button
        onClick={() => setOpen((prev) => !prev)}
        style={{ flexGrow: 0.5 }}
      >
        Open Drawer
      </Button>
      <Typography variant="h3">Header</Typography>
    </AppBar>
  );
  const leftpane = (
    <div style={{ background: "cyan", minHeight: "100%" }}>
      <h2 style={{ margin: 0 }}>LeftPane</h2>
    </div>
  );
  const main = (
    <div
      style={{
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3 style={{ margin: 0 }}>Main Window</h3>
      <img
        src={
          "data:image/png;base64,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"
        }
      />
    </div>
  );
  return (
    <>
      <ProjectPool header={header} leftpane={leftpane}>
        {main}
      </ProjectPool>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen((prev) => !prev)}
      >
        <Typography variant="h6">This is a drawer</Typography>
      </Drawer>
    </>
  );
};

export const VerticalStepperProjectPool = () => {
  const [open, setOpen] = useState(false);
  const header = (
    <AppBar position="static" style={{ display: "flex", flexDirection: "row" }}>
      <Button
        onClick={() => setOpen((prev) => !prev)}
        style={{ flexGrow: 0.5 }}
      >
        Open Drawer
      </Button>
      <Typography variant="h3">Header</Typography>
    </AppBar>
  );
  const leftpane = (
    <div style={{ background: "cyan", minHeight: "100%" }}>
      <h2 style={{ margin: 0 }}>LeftPane</h2>
    </div>
  );
  const main = (
    <div
      style={{
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3 style={{ margin: 0 }}>Main Window</h3>
      <img
        src={
          "data:image/png;base64,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"
        }
      />
    </div>
  );
  return (
    <>
      <ProjectPool header={header} leftpane={leftpane}>
        {main}
      </ProjectPool>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen((prev) => !prev)}
      >
        <VerticalStepper data={[]} onStepClick={() => null} />
      </Drawer>
    </>
  );
};

export const HideLeftPaneProjectPool = () => {
  const [hide, setHide] = useState(false);
  const header = (
    <AppBar position="static" style={{ display: "flex", flexDirection: "row" }}>
      <Button
        onClick={() => setHide((prev) => !prev)}
        style={{ flexGrow: 0.5 }}
      >
        Hide LeftPane
      </Button>
      <Typography variant="h3">Header</Typography>
    </AppBar>
  );
  const leftpane = (
    <div style={{ background: "cyan", minHeight: "100%" }}>
      <h2 style={{ margin: 0 }}>LeftPane</h2>
    </div>
  );
  const main = (
    <div
      style={{
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3 style={{ margin: 0 }}>Main Window</h3>
      <img
        src={
          "data:image/png;base64,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"
        }
      />
    </div>
  );
  return (
    <ProjectPool hide={hide} header={header} leftpane={leftpane}>
      {main}
    </ProjectPool>
  );
};
