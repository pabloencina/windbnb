import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { FaStar } from "react-icons/fa";
import SuperHost from "../componentes/SuperHosts";
import { getAllStays } from "../data/data-manager";
import "../estilos-css/Album.css";
import "../estilos-css/SearchFilters.css";
import SearchAppBar from "./SearchAppBar";
import Title from "./Title";
//import SearchLabels from "./SearchLabels";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      contrastText: "#ffcc00",
    },
  },
});

export default function Album({userSearchFilters}) {
  const allStays = getAllStays();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SearchAppBar></SearchAppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
          
            <Title userSearchFilters={userSearchFilters}></Title>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            ></Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} className="contenedor">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {allStays.map((elem) => (
              <Grid item key={elem.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    width="395"
                    height="350"
                    component="img"
                    sx={{
                      // 16:9
                      pt: "0%",
                    }}
                    image={elem.photo}
                    alt="imagenes"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <SuperHost visibility={elem.superHost} />
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h1"
                      className="type"
                    >
                      {elem.type}
                      <FaStar className="icons"></FaStar>
                      {elem.rating}
                    </Typography>
                    <Typography className="titleElemnt">
                      {elem.title}
                    </Typography>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
