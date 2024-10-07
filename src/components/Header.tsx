import React from "react";
import { Box, ClickAwayListener, Stack } from "@mui/material";
import Button from "./Button";

const Header = () => {
  return (
    <Stack
      spacing={2}
      direction={"row"}
      className="bg-[#e0f2fe] rounded-b-2xl drop-shadow-md"
      justifyContent="space-between"
      sx={{ p: 2 }}
    >
      <Box
        sx={{ display: "flex", textAlign: "center", flexDirection: "row" }}
        alignContent="center"
        justifyContent="space-between"
      >
        <Button
          label="Logo"
          onClick={() => {
            alert("Clicked LOGO");
          }}
          buttonType="primary"
        ></Button>
        <h1 className="content-center">AlphaCoin</h1>
      </Box>
      <Box sx={{ marginLeft: "auto" }}>
        <Button
          label="Login"
          onClick={() => {
            alert("Clicked Login");
          }}
          buttonType="primary"
        ></Button>
        <Button
          label="Register"
          onClick={() => {
            alert("Clicked Register");
          }}
          buttonType="secondary"
        ></Button>
      </Box>
    </Stack>
  );
};

export default Header;
