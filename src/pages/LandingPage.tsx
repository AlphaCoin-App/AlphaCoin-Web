import React from "react";
import { Button, Header, Image } from "../components";
import { Stack, Box, Grid, Typography, List, ListItem } from "@mui/material";

const LandingPage = () => {
  return (
    <Stack>
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5} sx={{ height: "55vh", mx: 4, mt: 5 }}>
          <Grid item xs={6}>
            <Box
              sx={{ bgcolor: "#e0f2fe", height: "100%" }}
              className="rounded-lg"
            >
              Left Box
            </Box>
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
              <List sx={{ ListStyleType: "disc" }}>
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
    </Stack>
  );
};

export default LandingPage;
