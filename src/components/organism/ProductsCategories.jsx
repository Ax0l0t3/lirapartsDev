import { useState } from "react";
import { createPortal } from "react-dom";
import { SquareCard } from "../atom/SquareCard";
import { DemoDialog } from "./DemoDialog";
import { KotRoomsIcon } from "../atom/SvgKotRoomsIcon";
import "../../styles/_products-bg.css";

export const ProductsCards = () => {
  const [modalState, setModalState] = useState(false);
  // Demo Content
  const returnDemoHeader = () => <KotRoomsIcon />;
  const returnDemoBody = () => (
    <p className="m-8">
      Felicidades!
      <br />
      Esta página es una demostración con interacciones limitadas y diseños
      prestablecidos.
      <br />
      Para adquirir una experiencia completa que cumpla sus necesidades
      comunicarse al correo arrinoyo@hotmail.com y pondremos nuestros servicios
      a su disposición.
    </p>
  );
  const returnDemoFooter = () => (
    <div className="flex flex-wrap text-white divide-x">
      <p className="px-2">котRooms®</p>
      <p className="px-2">CasiTrajeados®</p>
    </div>
  );
  // Return Demo Content
  const prettyCardContent = {
    header: returnDemoHeader(),
    body: returnDemoBody(),
    footer: returnDemoFooter(),
  };
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
      {modalState &&
        createPortal(
          <DemoDialog
            handleClick={() => setModalState(false)}
            cardContent={prettyCardContent}
          />,
          document.getElementById("root"),
        )}
    </div>
  );
};
