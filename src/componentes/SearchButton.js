import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React, { useState } from "react";
import "../styles-css/SearchButton.css";
import { getStaysByLocation } from "../data/data-manager";

const SearchButton = ({
  expanded,
  setExpanded,
  locationSearch,
  setLocationSearch,
  staysFound,
  setStaysFound,
  location,
}) => {
  const [style, setStyle] = useState("btnSearchContracted");
  const [buttonText, setButtonText] = useState("");

  const changeStyle = () => {
    if (expanded) {
      setExpanded(false);
      setStyle("btnSearchContracted");
      setButtonText("");
    } else {
      setExpanded(true);
      setStyle("btnSearchExpanded");
      setButtonText("Search");
    }
  };

  const btnOnClick = () => {
    if (expanded) {
      setLocationSearch(location);
      setStaysFound(getStaysByLocation(location));
    }
    changeStyle();
  };
  return (
    <button className={style} onClick={btnOnClick}>
      <SearchOutlinedIcon className="searchIcon" />
      {buttonText}
    </button>
  );
};

export default SearchButton;
