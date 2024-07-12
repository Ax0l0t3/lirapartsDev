import { useState } from "react";
import { createPortal } from "react-dom";
import { SquareCard } from "../atom/SquareCard";
import { DemoDialog } from "./DemoDialog";
export const ProductsCards = () => {
  const [modalState, setModalState] = useState(false);
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
  const handleCardClick = () => setModalState(!modalState);
  return (
    <div className="flex items-center flex-col py-4 font-[corbel]">
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
      {modalState &&
        createPortal(<DemoDialog />, document.getElementById("root"))}
    </div>
  );
};
