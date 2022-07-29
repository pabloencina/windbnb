import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "../estilos-css/SearchButton.css";
import { useState } from "react";

const SearchButton = ({whidthExpander}) => {
  console.log(whidthExpander)
  const [style, setStyle] = useState("btnSearch");
  const [buttonText, setButtonText] = useState("");

    const changeStyle = () => {
     whidthExpander = ''

    if (style === "btnSearch") {
      setStyle("btnSearch2");
      setButtonText("Search");
      whidthExpander = 'contenedorAutocompletarExpander'
    } else {
      setStyle("btnSearch");
      setButtonText("");
      whidthExpander = 'contenedorAutocompletar'
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
