import React from "react";
import "../estilos-css/NumberOfGuests.css";
import { useState } from "react";
import DoDisturbAltOutlinedIcon from "@mui/icons-material/DoDisturbAltOutlined";

const NumberOfGuests = () => {
  const [numclicks, setNumClicks] = useState(0);
  const [numclicksChild, setNumClicksChild] = useState(0);

  const handleClickAumentAdult = () => {
    setNumClicks(numclicks + 1);
  };

  const handleClickDisminutionAdult = () => {
    if (numclicks > 0) {
      setNumClicks(numclicks - 1);
    } else {
      <DoDisturbAltOutlinedIcon />;
    }
  };

  const handleClickAumentChild = () => {
    setNumClicksChild(numclicksChild + 1);
  };

  const handleClickDisminutionChild = () => {
    if (numclicksChild > 0) {
      setNumClicksChild(numclicksChild - 1);
    } else {
      <DoDisturbAltOutlinedIcon />;
    }
  };

  return (
    <>
      <div className="container">
        <div className="containerText">
          <h5>Adults</h5>
          <h6>Ages 13 or above</h6>
        </div>
        <div className="containerBtn">
          <button
            id="btnAumentar"
            className="btnGuests"
            onClick={handleClickDisminutionAdult}
          >
            {" "}
            -{" "}
          </button>
          {numclicks}
          <button
            id="btnDisminuir"
            className="btnGuests"
            onClick={handleClickAumentAdult}
          >
            {" "}
            +{" "}
          </button>
        </div>
        <div className="containerText">
          <h5>Children</h5>
          <h6>Ages 2-12</h6>
        </div>
        <div className="containerBtn">
          <button
            id="btnAumentar"
            className="btnGuests"
            onClick={handleClickDisminutionChild}
          >
            {" "}
            -{" "}
          </button>
          {numclicksChild}
          <button
            id="btnDisminuir"
            className="btnGuests"
            onClick={handleClickAumentChild}
          >
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default NumberOfGuests;
