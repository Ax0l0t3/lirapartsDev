import { useState } from "react";
import PropTypes from "prop-types";
import { DropDownEntry } from "../atom/DdlEntry";
import { DemoDialogContent } from "../../utils/DemoDialogContent";
import "../../styles/_dropdown-menu.css";

export const DropDownMenu = ({ entryOptions, isVisible }) => {
  const [modalState, setModalState] = useState(false);
  return (
    <div className={isVisible ? "dd-visible" : "dd-hidden"}>
      {entryOptions.map((entry, id) => (
        <DropDownEntry
          key={id}
          optionText={entry}
          entryClick={() => setModalState(!modalState)}
        />
      ))}
      <DemoDialogContent
        state={modalState}
        setState={() => setModalState(false)}
      />
    </div>
  );
};

DropDownMenu.propTypes = {
  entryOptions: PropTypes.arrayOf(PropTypes.string),
  isVisible: PropTypes.bool,
};
