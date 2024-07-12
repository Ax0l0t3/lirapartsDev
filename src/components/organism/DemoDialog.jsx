import { GeneralInfoCard } from "../molecule/GeneralInfoCard";
import "../../styles/_portal-style.css";

export const DemoDialog = () => {
  return (
    <div className="portal-style">
      <GeneralInfoCard cardTitle="Demo">
        <p>Esta es sólo una página prueba</p>
      </GeneralInfoCard>
    </div>
  );
};
