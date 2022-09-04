import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React, { useState } from "react";
import "../styles-css/SearchButton.css";

const SearchButton = ({ expanded, setExpanded, locationSearch, setLocationSearch, staysFound, setStaysFound  }) => {
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

  return (
    <button className={style} onClick={changeStyle}>
      <SearchOutlinedIcon className="searchIcon" />
      {buttonText}
    </button>
  );
};

export default SearchButton;
