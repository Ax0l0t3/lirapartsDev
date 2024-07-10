import { FaceLogoSVG } from "../atom/FbLogoSVG";

const Footer = () => {
  return (
    <div className="h-80 bg-black text-white flex justify-center p-[2.4%] text-[1.25rem]">
      <div className="flex flex-col mr-[2.5%]">
        <p className="mb-8">Nuestra Empresa</p>
        <a>Nosotros</a>
        <a>Contacto</a>
      </div>
      <div className="flex flex-col border-white border-x-2 px-[2.5%] w-1/4">
        <p className="mb-8">Mi Perfil</p>
        <a>Ingresar</a>
        <a>Editar Perfil</a>
        <a>Rastrear Pedidos</a>
        <a>Historial de Pedidos</a>
      </div>
      <div className="ml-[2.5%]">
        <FaceLogoSVG />
        <img src="" alt="Instagram" />
        <p>котRooms®</p>
        <p>CasiTrajeados®</p>
      </div>
    </div>
  );
};

export default Footer;
