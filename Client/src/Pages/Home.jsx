import * as React from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Container, Typography, Grid, Card, CardMedia } from "@mui/material";
import Button from "@mui/material/Button";

const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            minHeight: "calc(100vh - 128px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f5f5f5",
          }}
        >
          <Container maxWidth="md">
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Card sx={{ borderRadius: 16, boxShadow: 4 }}>
                  <CardMedia
                    component="img"
                    image="https://media.kasperskydaily.com/wp-content/uploads/sites/92/2020/10/16044143/M187_Digital-voting-header.png"
                    alt="random"
                    sx={{ borderRadius: 16, height: 300, objectFit: "cover" }}
                  />
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
                  Welcome to Digital Voting System
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                  A secure and efficient way to cast your vote.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box sx={{ position: "absolute", bottom: 16, right: 16, zIndex: 1 }}>
          <Link to="/Admin">
            <Button variant="contained" color="primary">
              Admin Login
            </Button>
          </Link>
        </Box>
      </main>
    </ThemeProvider>
  );
}