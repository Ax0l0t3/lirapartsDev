import { useState } from "react";
import { SquareCard } from "../atom/SquareCard";
import { DemoDialogContent } from "../../utils/DemoDialogContent";
import "../../styles/_products-bg.css";

export const ProductsCards = () => {
  const [modalState, setModalState] = useState(false);
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
  const handleCardClick = () => setModalState(!modalState);
  return (
    <div className="products-bg flex items-center flex-col py-4 font-[corbel]">
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
      <DemoDialogContent
        state={modalState}
        setState={() => setModalState(false)}
      />
    </div>
  );
};
