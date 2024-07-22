import { useContext } from "react";
import PropTypes from "prop-types";
import { DropDownEntry } from "../atom/DdlEntry";
import "../../styles/_dropdown-menu.css";
import { PortalContext } from "../../App";

export const DropDownMenu = ({
  entryOptions,
  isVisible,
  setVisibility = Function.prototype,
}) => {
  const { setShowPortal, setPortalContent } = useContext(PortalContext);
  const handleLinkClick = () => {
    setPortalContent("Demo");
    setShowPortal(true);
    setVisibility(false);
  };

  return (
    <div className={isVisible ? "dd-visible" : "dd-hidden"}>
      {entryOptions.map((entry, id) => (
        <DropDownEntry
          key={id}
          optionText={entry}
          entryClick={handleLinkClick}
        />
      ))}
    </div>
  );
};

DropDownMenu.propTypes = {
  entryOptions: PropTypes.arrayOf(PropTypes.string),
  isVisible: PropTypes.bool,
  setVisibility: PropTypes.func,
};
