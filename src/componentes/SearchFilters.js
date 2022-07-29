import * as React from "react";
import "../estilos-css/SearchFilters.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { getAllLocations } from "../data/data-manager";
import Box from "@mui/material/Box";
import NumberOfGuests from "./NumberOfGuests";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
//import {changeStyle} from '../componentes/SearchButton'

export default function SearchFilters(whidthExpander) {
  const allLocations = getAllLocations();
  //const changeWidth = changeStyle()
  
  return (
    <div id="contenedorInp">
      <Stack
        className = {whidthExpander ? "contenedorAutocompletar" : "contenedorAutocompletarExpander"}
        spacing={2}
        //width={changeWidth ? "contenedorAutocompletar" : "contenedorAutocompletarExpander"}
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
