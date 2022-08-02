import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { getAllLocations } from "../data/data-manager";
import "../estilos-css/SearchFilters.css";
import NumberOfGuests from "./NumberOfGuests";

export default function SearchFilters({ userSearchFilters, setUserSearchFilters }) {
  

  const allLocations = getAllLocations();
  const [value, setValue] = React.useState(userSearchFilters.location);
  return (
    <div id="contenedorInp">
      <Box className="contenedorAutocompletar">
        <Autocomplete
          value={value}
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
            setValue(newValue);
            setUserSearchFilters({
              ...userSearchFilters,
              location: newValue
            });
          }}
        />

        <Autocomplete
          Add
          Guests
          id="free-solo-2-demo"
          options={[{ a: "b" }]}
          getOptionLabel={(option) => `${option.a}`}
          renderOption={() => (
            <Box>
              <NumberOfGuests />
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
      </Box>
    </div>
  );
}

/*
setUserSearchFilters={setUserSearchFilters({
                location:{
                  city:`${option.city}`,
                  country:`${option.country}`
                }
              })}
*/
