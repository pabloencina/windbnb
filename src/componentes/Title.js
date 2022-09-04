import React from "react";
import Typography from "@mui/material/Typography";
//import { Stack } from "@mui/material";

const Title = ({locationSearch}) => {
  console.log({locationSearch})
  return (
    <Typography
    variant="h5"
    align="center"
    color="text.secondary">
    City of {locationSearch.city}, {locationSearch.country}
    </Typography>
  );
};

export default Title;
