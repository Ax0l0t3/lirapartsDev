import React from 'react';
import { SearchIcon } from '../components/atom/SVGSearchIcon';
import "../styles/_search-bar-content.css";
import { SimpleList } from '../components/molecule/SimpleList';
import { ProductLi } from '../components/atom/ProductLi'
import { CloseIcon } from '../components/atom/SVGCloseIcon';

export const SearchBarContent = () => {
  const productImages = [
    "./images/stone1.png",
    "./images/stone2.png",
    "./images/stone3.png",
    "./images/stone4.png",
    "./images/stone5.png",
    "./images/stone6.png",
    "./images/stone7.png",
    "./images/stone8.png",
  ]

  return (
    <div className='search-container'>
      <div className='flex m-8 mb-4'>
        <p className="text-2xl">Busqueda</p>
        <div className='close-form h-fit'>
          <CloseIcon />
        </div>
      </div>
      <div>
        <form className='search-form'>
          <SearchIcon iconFill="black"/>
          <input className="m-4" type="text" placeholder='Type to search'/>
        </form>
      </div>
      <SimpleList listStyle="m-8 mt-4 h-[50%]" listTitle="Productos">
        <ul>
          {productImages.map( (image,id) => (
            <li key={id} className='h-20 hover:bg-[#e9e9ffff]'>
              <ProductLi productImage={image}/>
            </li>
          ))}
        </ul>
      </SimpleList>
      <div className='search-footer'>
        <button type='button'>View More</button>
      </div>
    </div>
  );
};
