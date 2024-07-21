import React from 'react';

export const ProductLi = ({
  productImage,
  productName="Nombre de parte",
  productBrand = "Marca"
}) => {
  return (
    <div className='flex h-full'>
      <img className="h-full" src={productImage}/>
      <div className='mx-4'>
        <p>{productName}</p>
        <p className="text-[#808080ff]">{productBrand}</p>
      </div>
      <p className='ml-auto'>$300.00 MXN</p>
    </div>
  );
};
