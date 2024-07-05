import PropTypes from "prop-types";
import { DropDownEntry } from "../atom/DdlEntry";
import "../../styles/_dropdown-menu.css";

export const DropDownMenu = ({ entryOptions, isVisible }) => {
  return (
    <div className={isVisible ? "dd-visible" : "dd-hidden"}>
      {entryOptions.map((entry, id) => (
        <DropDownEntry key={id} optionText={entry} />
      ))}
    </div>
  );
};

DropDownMenu.propTypes = {
  entryOptions: PropTypes.arrayOf(PropTypes.string),
  isVisible: PropTypes.bool,
};
