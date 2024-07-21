import React from 'react';
import { PortalComponent } from '../../utils/PortalComponent';
import { SearchBarContent } from '../../utils/SearchBarContent';

export const GeneralSearchBar = ({
  isVisible,
  setIsVisible = Function.prototype
}) => {
  return (
    <PortalComponent
      portalChildren={<SearchBarContent />}
      isVisible={isVisible}
      setIsVisible={setIsVisible}
    />

  );
};
