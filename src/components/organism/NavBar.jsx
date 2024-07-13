import { useState } from "react";
import { LiraPartsLogo } from "../atom/SvgLiraPartsLogo";
import { DropDownMenu } from "../molecule/DropDownMenu";
import { DemoDialogContent } from "../../utils/DemoDialogContent";
import "../../styles/_navbar-selector.css";

export const NavBar = () => {
  const [isDdl, setIsDdl] = useState(false);
  const [modalState, setModalState] = useState(false);
  const navbarLabels = ["Inicio", "Nosotros", "Contacto"];
  return (
    <div
      className="bg-[#53b2f5ff] h-20 w-full flex items-end"
      onMouseLeave={() => setIsDdl(false)}
    >
      <div className="bg-black h-[4.5rem] w-full rounded-t-2xl flex items-center z-[2]">
        <LiraPartsLogo />
        <div className="flex items-center w-1/2">
          {navbarLabels.map((label, id) => (
            <a
              key={id}
              className="selector text-white text-xl px-8 cursor-pointer"
              onClick={() => setModalState(!modalState)}
            >
              {label}
            </a>
          ))}
        </div>
        <div
          className="h-20 w-20 bg-sky-200 hover:bg-sky-700 cursor-pointer rounded-full ml-auto z-[5]"
          onClick={() => setIsDdl(!isDdl)}
        />
      </div>
      <DropDownMenu
        isVisible={isDdl}
        entryOptions={["Iniciar Sesión", "Crear Cuenta"]}
      />
      <DemoDialogContent
        state={modalState}
        setState={() => setModalState(false)}
      />
    </div>
  );
};
