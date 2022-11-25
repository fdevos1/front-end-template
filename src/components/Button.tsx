import { Button, Typography } from "@mui/material";

function ButtonComponent(props: any) {
  return (
    <Button {...props}>
      <Typography variant="button" color="text.primary">
        {props.text}
      </Typography>
    </Button>
  );
}

export default ButtonComponent;
