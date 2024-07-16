export const SecurityBranding = () => {
  const divContent = [
    {
      content: (
        <img className="scale-90 lg:scale-100" src="./images/fedexLogo.png" />
      ),
    },
    { content: <img src="./images/mystore.png" /> },
    { content: <img src="./images/secure.png" /> },
    {
      content: (
        <p>
          Sitio seguro encriptado con SiteLock
          <br />
          Aceptamos cualquier forma de pago
          <br />
          Enviamos el paquete el mismo día
        </p>
      ),
    },
  ];
  return (
    <div className="w-full flex justify-around font-[corbel]">
      {divContent.map((component, id) => (
        <div key={id} className="lg:text-[1.3rem] my-4">
          {component.content}
        </div>
      ))}
    </div>
  );
};
