export const SecurityBranding = () => {
  const contentCreator = [
    {
      imageName: "secure.png",
      text: "Toda tu información es protegida",
    },
    {
      imageName: "mystore.png",
      text: "Compras seguras con cualquier método de pago",
    },
    {
      imageName: "fedex.png",
      text: "Envíos a toda la república en menos de 48 hrs",
    },
  ];
  return (
    <div className="w-full h-[10.75rem] flex justify-around font-[corbel]">
      {contentCreator.map((component, id) => (
        <div
          key={id}
          className="flex flex-wrap flex-col items-center justify-center text-[1.25rem]"
        >
          <img className="h-fit" src={`./images/${component.imageName}`} />
          <p>{component.text}</p>
        </div>
      ))}
    </div>
  );
};
