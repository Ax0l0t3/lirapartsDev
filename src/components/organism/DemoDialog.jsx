import PropTypes from "prop-types";
import { PrettyCard } from "../molecule/PrettyCard";
import "../../styles/_portal-style.css";

export const DemoDialog = ({
  cardContent,
  handleClick = Function.prototype,
}) => {
  return (
    <div className="portal-style" onClick={handleClick}>
      <PrettyCard cardTitle="Demo" content={cardContent} />
    </div>
  );
};

DemoDialog.propTypes = {
  cardContent: PropTypes.object,
  handleClick: PropTypes.func,
};
