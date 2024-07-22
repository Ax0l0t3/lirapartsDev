// Atoms
import { MouseMove } from "../atom/SvgMouseMove";
import { BoxTick } from "../atom/SvgBoxTick";
import { MiniPackage } from "../atom/SvgMiniPackage";
import { SvgCartIcon } from "../atom/SvgCartIcon";
// Styles
import "../../styles/_buying-steps.css";

export const BuyingStripe = () => {
  const getMessageTime = () => {
    const startDate = new Date(Date.now());
    const hours = String(startDate.getHours()).padStart(2, "0");
    const minutes = String(startDate.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  const imagesSrc = [
    "./images/exampleQr.png",
    "./images/fedexLogo.png",
    "./images/mystore.png",
    "./images/secure.png",
  ];

  const msgContent = [
    {
      type: "answer",
      description: "Escanea el código QR y resolveremos todas tus dudas",
    },
    {
      type: "question",
      description: "¿Cómo puedo comprar?",
    },
    {
      type: "answer",
      component: <MouseMove />,
      description: "Elije las partes o refacciones que necesites",
    },
    {
      type: "answer",
      component: <BoxTick />,
      description: "Selecciona comprar para añadirlas al carrito",
    },
    {
      type: "answer",
      component: <SvgCartIcon />,
      description:
        "Revisa todos tus productos seleccionados en tu carrito de compras",
    },
    {
      type: "answer",
      component: <MiniPackage />,
      description: "Selecciona el método de pago y listo!",
    },
    {
      type: "question",
      description: "¿Qué formas de pago aceptan?",
    },
    {
      type: "answer",
      description:
        "Todas las tarjetas son bienvenidas vía PayPal,  depósitos en Oxxo y transferencias interbancarias",
    },
    {
      type: "question",
      description: "¿Envían a todo México?",
    },
    {
      type: "answer",
      description:
        "Envíos el mismo día por FedEx y en menos de 48 horas está en tu puerta",
    },
  ];

  return (
    <div
      style={{ backgroundImage: `url("./images/A5Stratoii.png")` }}
      className="steps-bg p-4 font-[corbel] flex justify-center overflow-visible"
    >
      <div className="overflow-container">
        <div className="mx-4 mb-4 flex flex-col items-center justify-between">
          {imagesSrc.map((source, id) => (
            <img key={id} className="buying-image" src={source} alt={source} />
          ))}
        </div>
        <div className="msg-div">
          {msgContent.map((content, id) => (
            <div
              key={id}
              className={content.type === "answer" ? "msg-box-1" : "msg-box-2"}
            >
              <p className="mx-4">{content.description}</p>
              <p className="self-end text-[0.6rem] lg:text-[0.8rem] mt-[0.6rem] mr-[0.4rem]">
                {getMessageTime()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
