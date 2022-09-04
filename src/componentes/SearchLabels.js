import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import * as React from "react";
import "../styles-css/SearchFilters.css";
import "../styles-css/SearchLabels.css"


export default function SearchLabels({ userSearchFilters }) {
  return (
    <div id="contenedorInp">
      <Box spacing={2} className="box-container-input">
        <TextField
          id="location-search-label"
          className="container-input"
          //label="Location"
          value={`${userSearchFilters.location.city}, ${userSearchFilters.location.country}`}
          disabled={true}
        />
        <TextField
          id="guests-search-label"
          className="container-input"
          //label="Guests"
          type="number"
          value={userSearchFilters.guests}
          InputLabelProps={{
            shrink: true,
          }}
          disabled={true}
        />
      </Box>
    </div>
  );
}


/*
<TextField
          label="Guests"
          value={userSearchFilters.guests}
          disabled={true}
        />
*/