import { SquareCard } from "../atom/SquareCard";
export const ProductsCards = () => {
  const productCategories = [
    {
      cardTitle: "Cabeza",
      imgName: "ibanezHead.png"
    },
    {
      cardTitle: "Mástil",
      imgName: "ibanezFretboard.png"
    },
    {
      cardTitle: "Cuerpo",
      imgName: "ibanezBody.png"
    },
    {
      cardTitle: "Herramientas",
      imgName: "ibanezTools.png"
    },
    {
      cardTitle: "Amps y Pedales",
      imgName: "ibanezAmps.png"
    },
    {
      cardTitle: "Kits",
      imgName: "ibanezKits.png"
    }
  ];
  return (
    <div className="flex items-center flex-col py-4">
      <h1 className="text-7xl">Productos</h1>
      <div className="flex flex-wrap justify-center">
        {productCategories.map((category, id) => (
          <SquareCard key={id} cardTitle={category.cardTitle} imageName={category.imgName}/>
        ))}
      </div>
    </div>
  );
};
