import * as React from "react";
//import { v4 as uuidv4 } from "uuid";
import "../estilos-css/Autocompletar.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { getAllLocations } from "../data/data-manager";
import Box from "@mui/material/Box";
import Guests from "./CantidadGuests";
import { FaSearchLocation } from "react-icons/fa";

export default function FreeSolo() {
  const allLocations = getAllLocations();
  // .map((item) => item.city + ", " + item.country)
  return (
    <div id="contenedorInp">
      <Stack
        className="contenedorAutocompletar"
        spacing={2}
        sx={{ width: 300 }}
      >
        <Autocomplete
          id="free-solo-demo"
          Location
          options={allLocations}
          getOptionLabel={(option) => `${option.city}, ${option.country}`}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              <FaSearchLocation color="#EB5757" />
              
              {option.city}, {option.country}
            </Box>
          )}
          renderInput={(params) => (
            <TextField {...params} label="Location" className="autoCompletar" />
          )}
        />

        <Autocomplete
          Add
          Guests
          id="free-solo-2-demo"
          options={[{a:'b'}]}
          getOptionLabel={(option) => `${option.a}`}
          renderOption={() => (
            <Box>
              <Guests />
            </Box>
          )}
          renderInput={(params) => (
            <TextField {...params} label="Add guests" className="autoCompletar" />
          )}
        />
      </Stack>
    </div>
  );
}
