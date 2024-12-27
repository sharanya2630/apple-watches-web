import React, { useState } from "react";
import "./Details.scss";

const Details = () => {
  const [selectedMaterial, setSelectedMaterial] = useState("Aluminum");

  return (
    <div className="details-container">
      <p className="title">Apple Watch Series 10</p>
      <p className="description">46mm Jet Black Aluminum Case with Black Solo Loop</p>
      <p className="price">From $429</p>
    
    </div>
  );
};

export default Details;
