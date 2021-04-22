import React, { useState } from "react";

import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { ModelCreated } from "@mattborghi/sciquant.ui.model-created";
import { InputsList } from "@mattborghi/sciquant.ui.inputs-list";
import { Error } from "@mattborghi/sciquant.extras.error";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",
  },
  button: {
    margin: "1em",
  },
}));

export type ModelCreatorProps = {
  /** logo */
  logo;
  /** Engine data array */
  engineData;
  product;
  setProduct;
  /** Products data array */
  productsData;
  process;
  setProcess;
  /** Processes data array */
  processesData;
  loading;
  error;
  onCreate;
};

export function ModelCreator({
  logo,
  engineData,
  process,
  setProcess,
  processesData,
  product,
  setProduct,
  productsData,
  loading,
  error,
  onCreate,
}: ModelCreatorProps) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  if (error) return <Error error={error} />;
  return (
    <Grid
      container
      justify="center"
      align-items="flex-start"
      className={classes.root}
    >
      {/* Engine */}
      <Grid item xs={12}>
        <InputsList active data={engineData} title="Engine" />
      </Grid>
      {/* Icon */}
      <Grid item container xs={12} alignItems="center" justify="center">
        <img src={logo} height={300} />
      </Grid>
      {/* List Product */}
      <Grid item xs={3}>
        <InputsList
          data={productsData}
          onChange={(e) => setProduct(e)}
          title="Select Product"
          empty="No products created yet"
        />
      </Grid>

      <Grid item xs={6}>
        <Button
          className={classes.button}
          color="inherit"
          variant="outlined"
          size="large"
          disabled={!product || !process}
          onClick={() => {
            onCreate();
            setOpen(true);
          }}
        >
          {loading ? "Generating Model..." : "Generate Model"}
        </Button>
      </Grid>
      {/* List Process */}
      <Grid item xs={3}>
        <InputsList
          data={processesData}
          onChange={(e) => setProcess(e)}
          title="Select Process"
          empty="No processes created yet"
        />
      </Grid>
      {/* TODO: Change message box saying the model was successfuly generated. Dont wait */}
      <ModelCreated open={open} onClose={() => setOpen(false)} />
    </Grid>
  );
}
