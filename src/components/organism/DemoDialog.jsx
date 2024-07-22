import { DemoModalContent } from "../../utils/DemoModalContent";
import { PortalComponent } from "../molecule/PortalComponent";
import PropTypes from "prop-types";

export const DemoDialog = ({
  isVisible,
  setIsVisible = Function.prototype,
}) => {
  return (
    <PortalComponent
      isVisible={isVisible}
      portalChildren={<DemoModalContent />}
      setIsVisible={setIsVisible}
    />
  );
};
DemoDialog.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func,
};
