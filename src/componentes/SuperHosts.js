import * as React from "react";
import Stack from "@mui/material/Stack";
import "../data/data";
import "../estilos-css/SuperHosts.css";

export default function SuperHost({ visibility }) {
  if (visibility){
    return (
      <Stack spacing={1} direction="row">
        <div variant="contained" className="containerSuperHost">
          <p className="superHosts">SUPER HOST</p>
        </div>
      </Stack>
    )}else{
      <Stack></Stack>
    }
}
