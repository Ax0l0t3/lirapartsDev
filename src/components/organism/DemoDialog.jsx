import { DemoModalContent } from "../../utils/DemoModalContent";
import { PortalComponent } from "../molecule/PortalComponent";
import "../../styles/_portal-style.css";

export const DemoDialog = ({
  isVisible,
  setIsVisible = Function.prototype,
}) => {
  return (
    <PortalComponent
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        portalChildren={<DemoModalContent />}
      />
  );
};
