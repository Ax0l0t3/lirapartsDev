import { useContext } from "react";
// Atoms
import { SquareCard } from "../atom/SquareCard";
// Utils
import { PortalContext } from "../../App";
// Styles
import "../../styles/_products-bg.css";

export const ProductsCards = () => {
  const { setShowPortal, setPortalContent } = useContext(PortalContext);
  // Product Categories
  const productCategories = [
    {
      cardTitle: "Cabeza",
      imgName: "ibanezHead.png",
    },
    {
      cardTitle: "Mástil",
      imgName: "ibanezFretboard.png",
    },
    {
      cardTitle: "Cuerpo",
      imgName: "ibanezBody.png",
    },
    {
      cardTitle: "Herramientas",
      imgName: "ibanezTools.png",
    },
    {
      cardTitle: "Amps y Pedales",
      imgName: "ibanezAmps.png",
    },
    {
      cardTitle: "Kits",
      imgName: "ibanezKits.png",
    },
  ];
  const handleCardClick = () => {
    setPortalContent("Demo");
    setShowPortal(true);
  };
  return (
    <div
      style={{ backgroundImage: `url("./images/repairGtr.jpg")` }}
      className=" products-bg"
    >
      <div className="products-gradient flex items-center flex-col py-4 font-[corbel]">
        <h1 className="text-7xl">Productos</h1>
        <div className="flex flex-wrap justify-center">
          {productCategories.map((category, id) => (
            <SquareCard
              key={id}
              cardTitle={category.cardTitle}
              imageName={category.imgName}
              clickHandle={handleCardClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
