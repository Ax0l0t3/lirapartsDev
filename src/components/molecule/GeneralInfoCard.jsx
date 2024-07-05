import React from "react";
import PropTypes from "prop-types";

export const GeneralInfoCard = ({
  cardTitle = "Como Comprar",
  children
 }) => {
  return (
    <div className="p-9 w-full h-full bg-[#ecececff] rounded-3xl flex flex-col">
      <h1 className="text-7xl">{cardTitle}</h1>
      {children}
    </div>
  );
};

GeneralInfoCard.propTypes = {
  cardTitle: PropTypes.string,
};
