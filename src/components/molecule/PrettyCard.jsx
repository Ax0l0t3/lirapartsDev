import PropTypes from "prop-types";
import "../../styles/_pretty-card.css";

export const PrettyCard = ({ cardTitle = "Como Comprar", content }) => {
  return (
    <div className="main-div">
      <div className="header-div">{content.header}</div>
      <h1 className="mt-4 text-3xl lg:mt-6 lg:text-4xl">{cardTitle}</h1>
      {content.body}
      <div className="footer-div">{content.footer}</div>
    </div>
  );
};

PrettyCard.propTypes = {
  cardTitle: PropTypes.string,
  content: PropTypes.object,
};
