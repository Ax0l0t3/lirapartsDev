import { useState, useEffect } from "react";
import LogosRibbonSVG from "../atom/SvgLogosRibbon";
import "../../styles/_blue-ribbon.css";
// Con una clase template static para after hacerle el cambio

export const BrandsRibbon = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => setAnimate(true), [animate]);
  return (
    <div className="h-[11.5rem] w-full bg-[#7c2021ff] overflow-hidden flex items-center justify-center flex-col">
      <div className={`flex my-4 blue-ribbon-${animate ? "left" : "right"}`}>
        <LogosRibbonSVG />
        <LogosRibbonSVG />
      </div>
      <div className={`flex my-4 blue-ribbon-${animate ? "right" : "left"}`}>
        <LogosRibbonSVG />
        <LogosRibbonSVG />
      </div>
    </div>
  );
};
