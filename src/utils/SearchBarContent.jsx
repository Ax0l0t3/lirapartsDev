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
  const [inputText, setInputText] = useState("");
  const handleInputChange = (e) => {
    const lowerCaseInputText = e.target.value.toLowerCase();
    
    const filteredProducts = miniDataBase.filter((imageObject) => {
      return (
        imageObject.name?.toLowerCase().includes(lowerCaseInputText) ||
        imageObject.brand?.toLowerCase().includes(lowerCaseInputText)
      );
    });
    setInputText(e.target.value);
    setDisplayProducts(filteredProducts);
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
        {displayProducts.length > 0 && inputText
          ? (
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
        ):
          <p>No Products</p>
          }
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
