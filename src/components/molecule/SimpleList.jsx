import PropTypes from "prop-types";
export const SimpleList = ({ listStyle, listTitle, children }) => {
  return (
    <div className={listStyle}>
      <p>{listTitle}</p>
      {children}
    </div>
  );
};

SimpleList.propTypes = {
  children: PropTypes.node,
  listStyle: PropTypes.string,
  listTitle: PropTypes.string,
};
