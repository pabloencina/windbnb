import React from "react";
import Typography from "@mui/material/Typography";
import { getAllLocations } from "../data/data-manager";
import { useState } from "react";

const Title = () => {
    const allLocations = getAllLocations();
    const [userSearchFilters, setUserSearchFilters] = useState({
        location: allLocations[0],
        
      });
  return (
    <Typography 
    variant="h5" 
    align="center" 
    color="text.secondary">
      Stay {userSearchFilters.location.city }s
      {setUserSearchFilters}
    </Typography>
  );
};

export default Title;
