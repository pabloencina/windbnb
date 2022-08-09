import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import * as React from "react";
import "../estilos-css/SearchFilters.css";


export default function SearchLabels({ userSearchFilters }) {
  return (
    <div id="contenedorInp">
      <Box spacing={2}>
        <TextField
          id="location-search-label"
          label="Location"
          value={`${userSearchFilters.location.city}, ${userSearchFilters.location.country}`}
          disabled={true}
        />
        <TextField
          id="guests-search-label"
          label="Guests"
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