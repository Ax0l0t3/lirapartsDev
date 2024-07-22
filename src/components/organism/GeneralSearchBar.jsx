import { PortalComponent } from "../molecule/PortalComponent";
import { SearchBarContent } from "../../utils/SearchBarContent";
import PropTypes from "prop-types";

export const GeneralSearchBar = ({
  isVisible,
  setIsVisible = Function.prototype,
}) => {
  return (
    <PortalComponent
      portalChildren={<SearchBarContent />}
      isVisible={isVisible}
      setIsVisible={setIsVisible}
    />
  );
};

GeneralSearchBar.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func,
};
