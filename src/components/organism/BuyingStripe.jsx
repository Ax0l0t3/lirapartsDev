import React from "react";
import { GeneralInfoCard } from "../molecule/GeneralInfoCard";
import { MouseMove } from "../atom/MouseMoveSVG";
import { BoxTick } from "../atom/BoxTickSVG";
import { MiniPackage } from "../atom/MiniPackageSVG";

export const BuyingStripe = () => {
  const cardComponents = [
    {
      component: <MouseMove />,
      description: "Elije las partes o refacciones que necesites",
    },
    {
      component: <BoxTick />,
      description: "Selecciona comprar",
    },
    {
      component: <MiniPackage />,
      description: "Elige el método de envío",
    },
  ];
  return (
    <div className="h-[29rem] bg-violet-900 p-4 font-[corbel]">
      <GeneralInfoCard>
        <div className="flex mt-auto mb-auto justify-between pt-4 text-[1.5rem]">
          {cardComponents.map((element, id) => (
            <div key={id} className="w-1/4">
              {element.component}
              <p>{element.description}</p>
            </div>
          ))}
        </div>
      </GeneralInfoCard>
    </div>
  );
};
