import PropTypes from "prop-types";

export const SimpleCard = ({
  bgClassName,
  cardTitle = "Como Comprar",
  children,
}) => {
  return (
    <div className={`p-9 w-content ${bgClassName} rounded-3xl flex flex-col`}>
      <h1 className="text-5xl">{cardTitle}</h1>
      {children}
    </div>
  );
};

SimpleCard.propTypes = {
  bgClassName: PropTypes.string,
  cardTitle: PropTypes.string,
  children: PropTypes.node,
};
