import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "../estilos-css/Busqueda.css";
import { useState } from "react";

const SearchButton = () => {
  const [style, setStyle] = useState("btnSearch");
  const [buttonText, setButtonText] = useState("");
  //const [width, setWidth] = useState( 'width: 300')

  const changeStyle = () => {
    // appBarExpanded = true

    if (style === "btnSearch") {
      setStyle("btnSearch2");
      setButtonText("Search");
    } else {
      setStyle("btnSearch");
      setButtonText("");
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
