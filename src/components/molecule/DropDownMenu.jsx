import { useState } from "react";
import PropTypes from "prop-types";
import { DropDownEntry } from "../atom/DdlEntry";
import { PortalComponent } from "./PortalComponent";
import "../../styles/_dropdown-menu.css";
import { DemoModalContent } from "../../utils/DemoModalContent";

export const DropDownMenu = ({
  entryOptions,
  isVisible,
  setVisibility = Function.prototype,
}) => {
  const [modalState, setModalState] = useState(false);
  return (
    <div className={isVisible ? "dd-visible" : "dd-hidden"}>
      {entryOptions.map((entry, id) => (
        <DropDownEntry
          key={id}
          optionText={entry}
          entryClick={() => {
            setModalState(!modalState);
            setVisibility(!isVisible);
          }}
        />
      ))}
      <PortalComponent
        isVisible={modalState}
        setIsVisible={() => setModalState(false)}
        portalChildren={<DemoModalContent />}
      />
    </div>
  );
};

DropDownMenu.propTypes = {
  entryOptions: PropTypes.arrayOf(PropTypes.string),
  isVisible: PropTypes.bool,
  setVisibility: PropTypes.func,
};
