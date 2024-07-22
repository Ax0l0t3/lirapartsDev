import { useState, useContext } from "react";
// Atoms
import { LiraPartsLogo } from "../atom/SvgLiraPartsLogo";
import { ManIcon } from "../atom/SVGManIcon";
import { SearchIcon } from "../atom/SVGSearchIcon";
// Molecules
import { DropDownMenu } from "../molecule/DropDownMenu";
// Utils
import { PortalContext } from "../../App";
// Styles
import "../../styles/_navbar-selector.css";

export const NavBar = () => {
  const { setShowPortal, setPortalContent } = useContext(PortalContext);
  const navbarLabels = ["Inicio", "Nosotros", "Contacto"];
  const [isDdl, setIsDdl] = useState(false);
  const handleSearchClick = () => {
    setPortalContent("Search");
    setShowPortal(true);
  };
  const handleLinkClick = () => {
    setPortalContent("Demo");
    setShowPortal(true);
  };

  return (
    <div
      className="bg-[#4b80c9ff] h-20 w-full flex items-end"
      onMouseLeave={() => setIsDdl(false)}
    >
      <div className="bg-black h-[4.5rem] w-full rounded-t-2xl flex items-center z-[2]">
        <LiraPartsLogo />
        <div className="flex items-center w-1/2">
          {navbarLabels.map((label, id) => (
            <a
              key={id}
              className="selector text-white text-xl px-8 cursor-pointer active:text-[#2e99ceff]"
              onClick={handleLinkClick}
            >
              {label}
            </a>
          ))}
        </div>
        <div
          className="ml-auto hover:scale-[0.9] transition-all"
          onClick={handleSearchClick}
        >
          <SearchIcon />
        </div>
        <div
          className="h-20 w-20 bg-[#2e99ceff] hover:bg-sky-700 cursor-pointer rounded-full ml-4 z-[5] flex justify-center items-center overflow-hidden"
          onClick={() => setIsDdl(!isDdl)}
        >
          <ManIcon />
        </div>
      </div>
      <DropDownMenu
        isVisible={isDdl}
        entryOptions={["Iniciar Sesión", "Crear Cuenta"]}
        setVisibility={setIsDdl}
      />
    </div>
  );
};
