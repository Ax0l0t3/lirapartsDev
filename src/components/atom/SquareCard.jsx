import PropTypes from "prop-types";
import "../../styles/_square-card.css";

export const SquareCard = ({
  cardTitle,
  clickHandle = Function.prototype,
  imageName,
}) => {
  return (
    <div className="text-3xl flex flex-col justify-center items-center rounded-lg">
      <button
        type="button"
        style={{ backgroundImage: `url(./images/${imageName})` }}
        className="card"
        onClick={clickHandle}
      ></button>
      <p>{cardTitle}</p>
    </div>
  );
};

SquareCard.propTypes = {
  cardTitle: PropTypes.string,
  clickHandle: PropTypes.func,
  imageName: PropTypes.string,
};
