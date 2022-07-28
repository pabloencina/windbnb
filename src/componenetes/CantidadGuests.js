import React from "react";
import "../estilos-css/CantidadGuests.css";
import { useState } from "react";
import DoDisturbAltOutlinedIcon from "@mui/icons-material/DoDisturbAltOutlined";

const Guests = () => {
  const [numclicks, setNumClicks] = useState(0);
  const [numclicksChild, setNumClicksChild] = useState(0);

  const manejarClickEnAumentoAdult = () => {
    setNumClicks(numclicks + 1);
  };

  const manejarClickEnDisminucionAdult = () => {
    if (numclicks > 0) {
      setNumClicks(numclicks - 1);
    } else {
      <DoDisturbAltOutlinedIcon />;
    }
  };

  const manejarClickEnAumentoChild = () => {
    setNumClicksChild(numclicksChild + 1);
  };

  const manejarClickEnDisminucionChild = () => {
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
            onClick={manejarClickEnDisminucionAdult}
          >
            {" "}
            -{" "}
          </button>
          {numclicks}
          <button
            id="btnDisminuir"
            className="btnGuests"
            onClick={manejarClickEnAumentoAdult}
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
            onClick={manejarClickEnDisminucionChild}
          >
            {" "}
            -{" "}
          </button>
          {numclicksChild}
          <button
            id="btnDisminuir"
            className="btnGuests"
            onClick={manejarClickEnAumentoChild}
          >
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Guests;
