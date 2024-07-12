import PropTypes from "prop-types";

export const GeneralInfoCard = ({ cardTitle = "Como Comprar", children }) => {
  return (
    <div className="p-9 w-content bg-[#ecececff] rounded-3xl flex flex-col opacity-100">
      <h1 className="text-5xl">{cardTitle}</h1>
      {children}
    </div>
  );
};

GeneralInfoCard.propTypes = {
  cardTitle: PropTypes.string,
  children: PropTypes.node,
};
