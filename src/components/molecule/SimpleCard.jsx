import PropTypes from "prop-types";

export const SimpleCard = ({
  bgClassName,
  cardTitle = "Como Comprar",
  children,
}) => {
  return (
    <div
      className={`w-fit ${bgClassName} rounded-3xl flex flex-col items-center`}
    >
      <h1 className="mt-4 text-4xl">{cardTitle}</h1>
      {children}
    </div>
  );
};

SimpleCard.propTypes = {
  bgClassName: PropTypes.string,
  cardTitle: PropTypes.string,
  children: PropTypes.node,
};
