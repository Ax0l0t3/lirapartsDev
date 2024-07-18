export const SecurityBranding = () => {
  const divContent = [
    {
      content: (
        <img className="scale-90 lg:scale-100" src="./images/fedexLogo.png" />
      ),
    },
    { content: <img src="./images/mystore.png" /> },
    { content: <img src="./images/secure.png" /> },
  ];
  return (
    <div className="w-full pb-4">
      <div className="flex flex-col items-center justify-around w-1/3">
        {divContent.map((component, id) => (
          <div key={id} className="mt-4">
            {component.content}
          </div>
        ))}
      </div>
    </div>
  );
};
