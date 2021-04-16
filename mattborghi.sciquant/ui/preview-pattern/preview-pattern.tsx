import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  AppBar,
  Toolbar,
  Typography,
  DialogContent,
  Grid,
} from "@material-ui/core";

// Light version of SyntaxHighlighter
import { Light as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";
import yaml from "react-syntax-highlighter/dist/esm/languages/hljs/yaml";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";
SyntaxHighlighter.registerLanguage("yaml", yaml);

const useStyles = makeStyles({
  appBar: {
    position: "relative",
  },
  flex: {
    flex: 1,
  },
  content: {
    // flexGrow: 1,
    // pading: 10,
    align: "center",
    // margin: 10,
  },
  dialog: {
    whiteSpace: "pre-line",
  },
  button: {
    textTransform: "none",
  },
  link: {
    outline: 0,
    color: "grey",
    textDecoration: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    "&:visited": {
      color: "darkgrey",
    },
    "&:hover": {
      color: "rgb(133, 130, 130)",
    },
    "&:active": {
      color: "darkgrey",
    },
  },
});

export interface PreviewPatternProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  code: string;
  additionalInfo;
  plot?;
}

export const PreviewPattern = ({
  title,
  code,
  additionalInfo,
  plot,
  ...rest
}: PreviewPatternProps) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <div {...rest}>
      <a onClick={() => setOpen(true)} className={classes.link}>
        Learn more
      </a>
      <Dialog
        fullWidth={plot ? true : false}
        open={open}
        disableBackdropClick={true}
        maxWidth={plot ? false : "sm"}
        className={classes.dialog}
      >
        <AppBar className={classes.appBar} color="inherit">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.flex}>
              Pattern preview
            </Typography>
            <Button
              color="inherit"
              onClick={() => setOpen(false)}
              className={classes.button}
              variant="outlined"
            >
              Close
            </Button>
          </Toolbar>
        </AppBar>

        <DialogContent>
          <Grid
            container
            alignItems="center"
            spacing={3}
            className={classes.content}
          >
            <Grid item xs={plot ? 6 : 12}>
              <Typography variant="subtitle1" color="inherit">
                {title}
              </Typography>
              {additionalInfo}
              <SyntaxHighlighter
                language="yaml"
                style={tomorrowNightEighties}
                showLineNumbers
              >
                {code}
              </SyntaxHighlighter>
            </Grid>
            {plot && (
              <Grid item xs={6}>
                {plot}
              </Grid>
            )}
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
};
