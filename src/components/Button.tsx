import React from "react";

import { Button, Typography } from "@mui/material";

function ButtonComponent(props: any) {
  return (
    <Button {...props}>
      <Typography variant="button">{props.text}</Typography>
    </Button>
  );
}

export default ButtonComponent;
