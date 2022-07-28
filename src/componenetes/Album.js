import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchFilters from "./SearchFilters";
import "../estilos-css/SearchFilters.css";
import { FaStar } from "react-icons/fa";
import "../estilos-css/Album.css";
import SearchButton from "./SearchButton";
import { getAllStays } from "../data/data-manager";
//import BasicButtons from '../componenetes/SuperHosts'

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

//const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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

export default function Album({whidthExpander}) {
  const allStays = getAllStays();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" className="navbar">
        <Toolbar>
          <img
            className="logo"
            src={require(`../imagenes-logos/windbnb-master/logo.png`)}
            alt="logo"
          />
          <Typography variant="h6" color="inherit" noWrap></Typography>
          <SearchFilters className={whidthExpander}></SearchFilters>
          <SearchButton />
        </Toolbar>
      </AppBar>
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
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            ></Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Stays
            </Typography>
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
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
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
