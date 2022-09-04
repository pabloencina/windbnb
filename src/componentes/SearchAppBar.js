import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import SearchButton from "./SearchButton";
import SearchFilters from "./SearchFilters";
import { getAllLocations } from "../data/data-manager";
import "../styles-css/Album.css";
import "../styles-css/SearchAppBar.css";
import "../styles-css/SearchFilters.css";
import SearchLabels from "./SearchLabels";

export default function SearchAppBar({
  locationSearch,
  setLocationSearch,
  staysFound,
  setStaysFound,
}) {
  const allLocations = getAllLocations();
  const [expanded, setExpanded] = useState(false);

  const [userSearchFilters, setUserSearchFilters] = useState({
    location: allLocations[0],
    guests: 2,
  });

  return (
    <AppBar
      position="relative"
      className={expanded ? "navbarExpanded" : "navbarContracted"}
    >
      <Toolbar>
        <img
          className="logo"
          src={require(`../imagenes-logos/windbnb-master/logo.png`)}
          alt="logo"
        />
        <Typography variant="h6" color="inherit" noWrap></Typography>
        {expanded ? (
          <SearchFilters
            userSearchFilters={userSearchFilters}
            setUserSearchFilters={setUserSearchFilters}
          ></SearchFilters>
        ) : (
          <SearchLabels userSearchFilters={userSearchFilters}></SearchLabels>
        )}

        <SearchButton
          expanded={expanded}
          setExpanded={setExpanded}
          locationSearch={locationSearch}
          setLocationSearch={setLocationSearch}
          staysFound={staysFound}
          setStaysFound={setStaysFound}
          location={userSearchFilters.location}
        />
      </Toolbar>
    </AppBar>
  );
}

// locationSearch={locationSearch} setLocationSearch={setLocationSearch} staysFound={staysFound} setStaysFound={setStaysFound}
