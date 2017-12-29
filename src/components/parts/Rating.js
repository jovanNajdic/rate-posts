import React from "react";
import { connect } from "react-redux";
import Star from "./Star";

const Rating = ({ numberOfstars, rating, rateIt }) => (
  <div className="rating row">
    {[...Array(numberOfstars)].map((x, i) => (
      <Star key={i} selected={i < rating} onClick={() => rateIt(i + 1)} />
    ))}
  </div>
);

function mapStateToProps(state) {
  return {
    numberOfstars: state.stars
  };
}

export default connect(mapStateToProps, null)(Rating);
