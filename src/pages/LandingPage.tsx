import React from "react";
import { Link } from "react-router-dom";
import { Button, Header, Image } from "../components";
import { Stack, Box, Grid, Typography, List, ListItem } from "@mui/material";

const LandingPage = () => {
  return (
    <Stack>
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5} sx={{ height: "55vh", mx: 4, mt: 5 }}>
          <Grid item xs={6}>
            <Box sx={{ height: "100%" }} className="rounded-lg bg-sky"></Box>
          </Grid>
          <Grid item xs={5}>
            <Box
              sx={{
                bgcolor: "white",
                height: "100%",
                alignItems: "center",
                display: "flex",
              }}
            >
              <List sx={{ ListStyleType: "disc", pl: 4 }}>
                <ListItem sx={{ display: "list-item" }}>
                  <Typography variant="h3" component="h3">
                    Invest in crypto
                  </Typography>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <Typography variant="h3" component="h3">
                    View your portfolio
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexDirection: "column", height: "80vh" }} className="mt-10">
        <Typography variant="h3" component="h3" className="text-center mb-5">
          Our Crypto Range
        </Typography>
        <Box className="bg-sky h-full m-8 rounded-lg"></Box>
      </Box>
    </Stack>
  );
};

export default LandingPage;
