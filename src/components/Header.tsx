import React from "react";
import { Stack } from "@mui/material";
import Button from "./Button";

const Header = () => {
  return (
    <Stack spacing={2} direction={"row"}>
      <Button
        label="Login"
        onClick={() => {
          alert("Clicked Login");
        }}
      ></Button>
      <h1>Head</h1>
      <h1>Bamlak</h1>
      <h1>Panya</h1>
    </Stack>
  );
};

export default Header;
