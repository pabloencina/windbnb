import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
//import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ComboBox from './Autocompletar';
import '../estilos-css/Autocompletar.css'
import { FaStar } from "react-icons/fa";
import '../estilos-css/Album.css'
import SearchAppBar from './Busqueda'
import {getAllStays} from '../data/data-manager'
import BasicButtons from '../componenetes/SuperHosts'

function Copyright() {

  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

//const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
  },
});

export default function Album() {

  const allStays = getAllStays();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" className='navbar'>
        <Toolbar>
          <img className='logo' src={require(`../imagenes-logos/windbnb-master/logo.png`)} alt='logo'/>
          <Typography variant="h6" color="inherit" noWrap>
            
          </Typography>
          <ComboBox className='autoCompletar'></ComboBox>
          <SearchAppBar/>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
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
            >
              
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Stays
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} className='contenedor'>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {allStays.map((elem) => (
              <Grid item key={elem.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                  width='395'
                  height='350'
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0%',
                    }}
                    image={elem.photo}
                    
                    alt="imagenes"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="h1" className='type'>
                      <BasicButtons />
                      {elem.type }
                      <FaStar className='icons'></FaStar>{elem.rating}
                    </Typography>
                    <Typography className='titleElemnt'>
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
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
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

/*
const array = [
  {
      id:uuidv4(),
    city: "Helsinki",
    country: "Finland",
    superHost: false,
    title: "Stylist apartment in center of the city.",
    rating: 4.4,
    maxGuests: 3,
    type: "Entire apartment",
    beds: 2,
    photo: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80"
  },
  {
      id:uuidv4(),
    city: "Turku",
    country: "Finland",
    superHost: false,
    title: "Nice apartment in center of Helsinki.",
    rating: 4.2,
    maxGuests: 5,
    type: "Entire apartment",
    beds: 3,
    photo: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
  },
  {
      id:uuidv4(),
    city: "Helsinki",
    country: "Finland",
    superHost: true,
    title: "Arty interior in 1900 wooden house.",
    rating: 4.5,
    maxGuests: 10,
    type: "Entire house",
    beds: 6,
    photo: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
  },
  {
      id:uuidv4(),
    city: "Helsinki",
    country: "Finland",
    superHost: false,
    title: "Apartment next to market spuare.",
    rating: 4.48,
    maxGuests: 3,
    type: "Entire apartment",
    beds: null,
    photo: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
  },
  {
      id:uuidv4(),
    city: "Turku",
    country: "Finland",
    superHost: true,
    title: "Villa Aurora guest-house.",
    rating: 4.75,
    maxGuests: 9,
    type: "Entire house",
    beds: null,
    photo: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=80"
  },
  {
      id:uuidv4(),
    city: "Vaasa",
    country: "Finland",
    superHost: true,
    title: "A cosy family house.",
    rating: 4.95,
    maxGuests: 6,
    type: "Entire house",
    beds: null,
    photo: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
  },
  {
      id:uuidv4(),
    city: "Vaasa",
    country: "Finland",
    superHost: false,
    title: "Lovely Studio near Railway Station.",
    rating: 4.68,
    maxGuests: 2,
    type: "Private room",
    beds: null,
    photo: "https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2591&q=80"
  },
  {
      id:uuidv4(),
    city: "Oulu",
    country: "Finland",
    superHost: false,
    title: "Peaceful little home in city center.",
    rating: 4.12,
    maxGuests: 6,
    type: "Entire house",
    beds: 3,
    photo: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
  },
  {
      id:uuidv4(),
    city: "Oulu",
    country: "Finland",
    superHost: false,
    title: "Beautiful new studio apartment nearby the center.",
    rating: 4.49,
    maxGuests: 2,
    type: "Entire apartment",
    beds: 1,
    photo: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2255&q=80"
  },
  {
      id:uuidv4(),
    city: "Oulu",
    country: "Finland",
    superHost: true,
    title: "Cozy woodhouse flat with wooden sauna.",
    rating: 4.38,
    maxGuests: 4,
    type: "Entire house",
    beds: null,
    photo: "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=930&q=80"
  },
  {
      id:uuidv4(),
    city: "Vaasa",
    country: "Finland",
    superHost: false,
    title: "Brand new studio apartment near the harbour.",
    rating: 4.89,
    maxGuests: 6,
    type: "Entire apartment",
    beds: 3,
    photo: "https://images.unsplash.com/photo-1494203484021-3c454daf695d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
  },
  {
      id:uuidv4(),
    city: "Helsinki",
    country: "Finland",
    superHost: false,
    title: "Beautiful and comfortable old wooden house.",
    rating: 4.63,
    maxGuests: 10,
    type: "Entire house",
    beds: null,
    photo: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
  },
  {
      id:uuidv4(),
    city: "Turku",
    country: "Finland",
    superHost: false,
    title: "Turku Nordic Home near city center.",
    rating: 4.24,
    maxGuests: 5,
    type: "Entire apartment",
    beds: 3,
    photo: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MzYxfQ&auto=format&fit=crop&w=2253&q=80"
  },
  {
      id:uuidv4(),
    city: "Turku",
    country: "Finland",
    superHost: true,
    title: "Nice 2 room apartment close to everything.",
    rating: 4.34,
    maxGuests: 6,
    type: "Entire apartment",
    beds: 3,
    photo: "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80"
  }
];*/