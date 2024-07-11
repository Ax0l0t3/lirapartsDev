// Atoms
import { MouseMove } from "../atom/SvgMouseMove";
import { BoxTick } from "../atom/SvgBoxTick";
import { MiniPackage } from "../atom/SvgMiniPackage";
import { SvgCartIcon } from "../atom/SvgCartIcon";
// Molecules
import { GeneralInfoCard } from "../molecule/GeneralInfoCard";
import "../../styles/_buying-steps.css";

export const BuyingStripe = () => {
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
    <div className="bg-violet-900 p-4 font-[corbel] flex justify-center">
      <GeneralInfoCard>
        <div className="buying-table text-[1.5rem]">
          {cardComponents.map((element, id) => (
            <div key={id} className="my-4">
              {element.component}
              <p className="w-[66%]">{element.description}</p>
            </div>
          ))}
        </div>
      </GeneralInfoCard>
    </div>
  );
};
