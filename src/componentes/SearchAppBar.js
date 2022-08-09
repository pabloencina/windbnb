import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import SearchButton from "../componentes/SearchButton";
import SearchFilters from "../componentes/SearchFilters";
import { getAllLocations } from "../data/data-manager";
import "../estilos-css/Album.css";
import "../estilos-css/SearchAppBar.css";
import "../estilos-css/SearchFilters.css";
import SearchLabels from "./SearchLabels";


export default function SearchAppBar() {

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

        <SearchButton expanded={expanded} setExpanded={setExpanded} />
      </Toolbar>
    </AppBar>
  );
}
