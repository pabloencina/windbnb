import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React, { useState } from "react";
import "../estilos-css/SearchButton.css";

const SearchButton = ({ expanded, setExpanded }) => {
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
