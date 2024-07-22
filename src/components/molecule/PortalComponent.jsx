import { createPortal } from "react-dom";
// Styles
import "../../styles/_portal-style.css";

export const PortalComponent = ({
  portalChildren,
  isVisible = false,
  setIsVisible = Function.prototype,
}) => {
  return (
    isVisible &&
    createPortal(
      <div className="portal-style" onClick={setIsVisible}>
        {portalChildren}
      </div>,
      document.getElementById("root"),
    )
  );
};
