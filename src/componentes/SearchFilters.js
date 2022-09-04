import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { getAllLocations } from "../data/data-manager";
import "../styles-css/SearchFilters.css";

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
    <div id="container-input">
      <Box className="container-autocomplete">
        <Autocomplete
          value={locationValue}
          id="input-location"
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
            <TextField {...params} label="Location" className="autocomplete" />
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
          className="autoComplete-guests"
          label="Guests"
          type="number"
          value={guestsValue}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{ inputProps: { min: 1, max: 10 } }}
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
