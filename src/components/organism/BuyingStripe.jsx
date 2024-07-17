// Atoms
import { MouseMove } from "../atom/SvgMouseMove";
import { BoxTick } from "../atom/SvgBoxTick";
import { MiniPackage } from "../atom/SvgMiniPackage";
import { SvgCartIcon } from "../atom/SvgCartIcon";
// Molecules
import { SimpleCard } from "../molecule/SimpleCard";
import "../../styles/_buying-steps.css";

export const BuyingStripe = () => {
  const getMessageTime = () => {
    const startDate = new Date(Date.now());
    const hours = String(startDate.getHours()).padStart(2, "0");
    const minutes = String(startDate.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  const cardComponents = [
    {
      component: <MouseMove />,
      description: "Elije las partes o refacciones que necesites",
    },
    {
      component: <BoxTick />,
      description: "Selecciona comprar para añadirlas al carrito",
    },
    {
      component: <SvgCartIcon />,
      description:
        "Revisa tus productos seleccionados en tu carrito de compras",
    },
    {
      component: <MiniPackage />,
      description: "Elige el método de envío",
    },
  ];
  return (
    <div
      style={{ backgroundImage: `url("./images/pedalForBg.png")` }}
      className="steps-bg p-4 font-[corbel] flex justify-center overflow-visible"
    >
      <SimpleCard bgClassName="bg-[#e9e9ffe5]">
        <div className="mx-4 flex w-[48rem] lg:w-[70rem]">
          {cardComponents.map((element, id) => (
            <div key={id} className="my-4 flex">
              {element.component}
              <p className="w-[43%] lg:w-[66%]">{element.description}</p>
            </div>
          ))}
        </div>
        <div className="w-[108%] bg-[#12142dff] rounded-xl flex relative">
          <img
            className="mr-4 my-4 ml-[7%] scale-90 lg:scale-100"
            src="./images/exampleQr.png"
            alt="example Qr image"
          />
          <div className="msg-div flex flex-col justify-around">
            <div className="msg-box-1 mx-4 lg:mx-8 lg:text-[1.1rem]">
              <p className="mx-4">Cualquier cosa</p>
              <p className="text-[0.6rem] mt-[0.6rem] mr-[0.4rem]">
                {getMessageTime()}
              </p>
            </div>
            <div className="msg-box-2 mx-4 lg:mx-8 lg:text-[1.1rem]">
              <p className="mx-4">Estamos para servirte</p>
              <p className="text-[0.6rem] mt-[0.6rem] mr-[0.4rem]">
                {getMessageTime()}
              </p>
            </div>
            <div className="msg-box-1 mx-4 lg:mx-8 lg:text-[1.1rem]">
              <p className="mx-4">Inicia un chat con nosotros</p>
              <p className="text-[0.6rem] mt-[0.6rem] mr-[0.4rem]">
                {getMessageTime()}
              </p>
            </div>
            <div className="msg-box-2 mx-4 lg:mx-8 lg:text-[1.1rem]">
              <p className="mx-4">
                Escanea el código QR y resolveremos tus dudas
              </p>
              <p className="text-[0.6rem] mt-[0.6rem] mr-[0.4rem]">
                {getMessageTime()}
              </p>
            </div>
          </div>
        </div>
      </SimpleCard>
    </div>
  );
};
