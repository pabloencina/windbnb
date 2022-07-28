import * as React from "react";
import "../estilos-css/SearchFilters.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { getAllLocations } from "../data/data-manager";
import Box from "@mui/material/Box";
import NumberOfGuests from "./NumberOfGuests";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default function SearchFilters({whidthExpander}) {
  const allLocations = getAllLocations();
  
  return (
    <div id="contenedorInp">
      <Stack
        className={whidthExpander ? "contenedorAutocompletarExpander" : "contenedorAutocompletar"}
        spacing={2}
        
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
              <LocationOnOutlinedIcon />
              
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
              < NumberOfGuests/>
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
