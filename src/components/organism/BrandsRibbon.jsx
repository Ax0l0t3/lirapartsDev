import { useState } from "react";
import LogosRibbonSVG from "../atom/SvgLogosRibbon";
import "../../styles/_blue-ribbon.css";

export const BrandsRibbon = () => {
  const [animate, setAnimate] = useState(false);
  return (
    <div
      id="id-01"
      className="h-[11.5rem] w-full bg-[#4b80c9ff] overflow-hidden flex items-center justify-center flex-col"
    >
      <div
        className={`flex my-4 blue-ribbon-${animate ? "up" : "down"}`}
        onAnimationEnd={() => setAnimate(!animate)}
      >
        <LogosRibbonSVG />
        <LogosRibbonSVG />
      </div>
      <div className={`flex my-4 blue-ribbon-${animate ? "down" : "up"}`}>
        <LogosRibbonSVG />
        <LogosRibbonSVG />
      </div>
    </div>
  );
};
