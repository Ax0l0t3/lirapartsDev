import { createPortal } from "react-dom";
import { KotRoomsIcon } from "../components/atom/SvgKotRoomsIcon";
import { DemoDialog } from "../components/organism/DemoDialog";

export const DemoDialogContent = ({ state, setState }) => {
  const dialogContent = {
    header: <KotRoomsIcon />,
    body: (
      <p className="m-4 text-sm lg:m-8 lg:text-base">
        Felicidades!
        <br />
        Esta página es una demostración con interacciones limitadas y diseños
        prestablecidos.
        <br />
        Para adquirir una experiencia completa que cumpla sus necesidades
        comunicarse al correo arrinoyo@hotmail.com y pondremos nuestros
        servicios a su disposición.
      </p>
    ),
    footer: (
      <div className="flex flex-wrap text-white divide-x">
        <p className="px-2">котRooms®</p>
        <p className="px-2">CasiTrajeados®</p>
      </div>
    ),
  };
  return (
    state &&
    createPortal(
      <DemoDialog
        handleClick={() => setState(!state)}
        cardContent={dialogContent}
      />,
      document.getElementById("root"),
    )
  );
};
