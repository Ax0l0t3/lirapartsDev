import { useState } from "react";
import PropTypes from "prop-types";
// Atoms
import { CloseIcon } from "../components/atom/SVGCloseIcon";
import { ProductLi } from "../components/atom/ProductLi";
import { SearchIcon } from "../components/atom/SVGSearchIcon";
// Molecules
import { SimpleList } from "../components/molecule/SimpleList";
// Utils
import miniDataBase from "../utils/images.json";
// Styles
import "../styles/_search-bar-content.css";

export const SearchBarContent = ({
  mouseEnter = Function.prototype,
  mouseLeave = Function.prototype,
  portalClose = Function.prototype,
}) => {
  const [displayProducts, setDisplayProducts] = useState([]);
  const handleInputChange = (e) => {
    console.log("Enters change");
    const newDisplayProducts = [];
    const lowerCaseInputText = e.target.value.toLowerCase();
    console.log("Before");
    console.log(newDisplayProducts);
    miniDataBase.forEach( imageObject => {
      if ( imageObject.name?.toLowerCase().includes(lowerCaseInputText) ){
        console.log(`${imageObject.name} contains ${lowerCaseInputText}`);
        newDisplayProducts.push(imageObject);
      } else {
        if ( imageObject.brand?.toLowerCase().includes(lowerCaseInputText) ){
          console.log(`${imageObject.brand} contains ${lowerCaseInputText}`);
          newDisplayProducts.push(imageObject);
        }
      }
      console.log("During");
      console.log(newDisplayProducts);
    });
    console.log("After");
    console.log(newDisplayProducts);
    setDisplayProducts(newDisplayProducts);
  };

  return (
    <div
      className="search-container"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <div className="flex m-8 mb-4">
        <p className="text-2xl">Busqueda</p>
        <div className="close-form h-fit" onClick={portalClose}>
          <CloseIcon />
        </div>
      </div>
      <div>
        <form className="search-form">
          <SearchIcon iconFill="black" />
          <input
            className="m-4"
            type="text"
            placeholder="Producto o Marca"
            autoFocus
            onChange={(e) => handleInputChange(e)}
          />
        </form>
      </div>
      <SimpleList listStyle="m-8 mt-4 h-[50%]" listTitle="Productos">
        <ul>
          {displayProducts.map((imageObject) => (
            <li key={imageObject.imageId} className="h-20 hover:bg-[#e9e9ffff]">
              <ProductLi
                productImage={imageObject.url}
                productName={imageObject.name}
                productBrand={imageObject.brand}
              />
            </li>
          ))}
        </ul>
      </SimpleList>
      <div className="search-footer">
        <button type="button">View More</button>
      </div>
    </div>
  );
};

SearchBarContent.propTypes = {
  mouseEnter: PropTypes.func.isRequired,
  mouseLeave: PropTypes.func.isRequired,
  portalClose: PropTypes.func,
};
