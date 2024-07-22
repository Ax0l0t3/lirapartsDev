import PropTypes from "prop-types";
// Atoms
import { KotRoomsIcon } from "../components/atom/SvgKotRoomsIcon";
// Molecule
import { PrettyCard } from "../components/molecule/PrettyCard";

export const DemoModalContent = ({
  mouseEnter = Function.prototype,
  mouseLeave = Function.prototype,
}) => {
  const demoContent = {
    header: <KotRoomsIcon />,
    body: (
      <p className="m-4 text-justify text-sm lg:m-8 lg:text-[1.1rem]">
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
    <div className="w-1/2" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <PrettyCard cardTitle="Trial" content={demoContent} />
    </div>
  );
};

DemoModalContent.propTypes = {
  mouseEnter: PropTypes.func,
  mouseLeave: PropTypes.func,
};
