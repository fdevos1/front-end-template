import React, { useState } from "react";

import { alpha, styled } from "@mui/material/styles";

import { TextField } from "@mui/material";
import { TextFieldProps } from "@mui/material/TextField";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";

const Searchbar = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    width: 200,
    backgroundColor: "#242526",
    overflow: "hidden",
    borderRadius: 4,
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
    },

    "& .MuiInputLabel-root": {
      color: "#E4E6EB",
    },
  },
}));

function SearchbarComponent(props: any) {
  const [value, setValue] = useState("");

  return <Searchbar label={props.label} defaultValue={value} {...props} />;
}

export default SearchbarComponent;
