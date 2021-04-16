import React from "react";
import "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  AccordionDetails,
  AccordionActions,
  Typography,
  Button,
  Divider,
} from "@material-ui/core";
import MathJax from "react-mathjax-preview";
import { PreviewPattern } from "@mattborghi/sciquant.ui.preview-pattern";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: 15,
  },
  details: {
    alignItems: "center",
    fontSize: 13,
  },
  column: {
    paddingRight: 20,
    maxWidth: 110,
    minWidth: 110,
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
    display: "table",
    marginRight: "auto",
  },
  button: {
    background: "linear-gradient(to bottom, #424242 0%, #505050 100%)",
    width: 64,
    border: "none",
    borderRadius: 4,
    color: "white",
  },
}));

export interface AccordionItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  divider: boolean;
  title: string;
  description: string;
  patternCodes?: string;
  additionalInfo?: string;
  plot?;
  onClick;
  icon;
}

export const AccordionItem = ({
  children,
  divider,
  title,
  description,
  patternCodes,
  additionalInfo,
  plot,
  onClick,
  icon,
  ...rest
}: AccordionItemProps) => {
  const classes = useStyles();
  return (
    <div {...rest}>
      <AccordionDetails className={classes.details}>
        <div className={classes.column}>
          <Typography className={classes.heading}>{title}</Typography>
        </div>
        <div className={classes.helper}>
          <Typography variant="caption">
            {description}
            <br />
            {(additionalInfo || plot) && patternCodes && (
              <PreviewPattern
                title={title}
                code={patternCodes}
                additionalInfo={<MathJax math={additionalInfo} />}
                plot={plot}
              />
            )}
          </Typography>
        </div>
        <AccordionActions>
          <Button
            variant="contained"
            onClick={onClick}
            className={classes.button}
          >
            {icon}
          </Button>
        </AccordionActions>
      </AccordionDetails>
      {divider && <Divider />}
    </div>
  );
};
