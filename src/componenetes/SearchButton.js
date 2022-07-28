import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SearchFilters from "./SearchFilters";
import "../estilos-css/SearchButton.css";
import { useState } from "react";

const SearchButton = ({whidthExpander}) => {
  console.log(whidthExpander)
  const [style, setStyle] = useState("btnSearch");
  const [buttonText, setButtonText] = useState("");
  //const [width, setWidth] = useState( 'width: 300')

  const changeStyle = () => {
    // appBarExpanded = true

    if (style === "btnSearch") {
      setStyle("btnSearch2");
      setButtonText("Search");
      <SearchFilters whidthExpander = {"contenedorAutocompletarExpander"}/>;
    } else {
      setStyle("btnSearch");
      setButtonText("");
      <SearchFilters whidthExpander = {"contenedorAutocompletar"}/>;
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
