import { useState, useEffect } from "react";
import LogosRibbonSVG from "../atom/SvgLogosRibbon";
import "../../styles/_blue-ribbon.css";

export const BrandsRibbon = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => setAnimate(true), [animate]);
  return (
    <div className="h-[11.5rem] w-full bg-[#53b2f5ff] overflow-hidden flex items-center justify-center flex-col">
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