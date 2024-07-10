import React from "react";
import PropTypes from "prop-types";
import "../../styles/_square-card.css";

export const SquareCard = ({ cardTitle, imageName }) => {
  return (
    <div className="text-3xl flex flex-col justify-center items-center">
      <button type="button" className="card">
        <img
          className="for-shadow"
          src={`./images/${imageName}`}
          alt={cardTitle}
        />
      </button>
      <p>{cardTitle}</p>
    </div>
  );
};

SquareCard.propTypes = {
  cardTitle: PropTypes.string,
};
