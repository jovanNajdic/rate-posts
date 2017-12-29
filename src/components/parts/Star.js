import React from "react";

const Star = ({ rating, selected, onClick }) => (
  <div className={selected ? "star star--selected" : "star"} onClick={onClick} />
);

export default Star;
