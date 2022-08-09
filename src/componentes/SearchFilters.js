import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { getAllLocations } from "../data/data-manager";
import "../estilos-css/SearchFilters.css";


export default function SearchFilters({
  userSearchFilters,
  setUserSearchFilters,
}) {
  const allLocations = getAllLocations();
  const [locationValue, setLocationValue] = React.useState(
    userSearchFilters.location
  );
  const [guestsValue, setGuestsValue] = React.useState(
    userSearchFilters.guests
  );
  return (
    <div id="contenedorInp">
      <Box className="contenedorAutocompletar">
        <Autocomplete
          value={locationValue}
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
          onChange={(event, newValue) => {
            setLocationValue(newValue);
            setUserSearchFilters({
              ...userSearchFilters,
              location: newValue,
            });
          }}
        />
        
          <TextField
            id="standard-number"
            className="autoCompletar"
            label="Guests"
            type="number"
            value={guestsValue}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(event) => {
              setGuestsValue(event.target.value);
              setUserSearchFilters({
                ...userSearchFilters,
                guests: event.target.value,
              });
            }}
          />

      </Box>
    </div>
  );
}

/*
<Autocomplete
          Add
          Guests
          id="free-solo-2-demo"
          options={[{ a: "b" }]}
          getOptionLabel={(option) => `${option.a}`}
          renderOption={() => (
            <Box>
              
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Add guests"
              className="autoCompletar"
            />
          )}
        />
*/
