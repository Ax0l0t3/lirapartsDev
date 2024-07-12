import { useState } from 'react';
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { DemoDialog } from "../organism/DemoDialog";
import "../../styles/_square-card.css";

export const SquareCard = ({ cardTitle, imageName }) => {
  const [modalState, setModalState] = useState(false);
  return (
    <div className="text-3xl flex flex-col justify-center items-center">
      <button type="button" className="card" onClick={() => setModalState(!modalState)}>
        <img
          className="for-shadow"
          src={`./images/${imageName}`}
          alt={cardTitle}
        />
      </button>
      <p>{cardTitle}</p>
      {modalState && createPortal(<DemoDialog />, document.getElementById('root'))}
    </div>
  );
};

SquareCard.propTypes = {
  cardTitle: PropTypes.string,
  imageName: PropTypes.string,
};
