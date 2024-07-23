import PropTypes from "prop-types";
export const ProductLi = ({
  productImage,
  productName = "Nombre de parte",
  productBrand = "Marca",
  productPrice = 0,
}) => {
  return (
    <div className="flex h-full">
      <img className="h-full" src={productImage} />
      <div className="mx-4">
        <p>{productName}</p>
        <p className="text-[#808080ff]">{productBrand}</p>
      </div>
      <p className="ml-auto">${productPrice} MXN</p>
    </div>
  );
};

ProductLi.propTypes = {
  productImage: PropTypes.string,
  productName: PropTypes.string,
  productBrand: PropTypes.string,
  productPrice: PropTypes.number,
};
