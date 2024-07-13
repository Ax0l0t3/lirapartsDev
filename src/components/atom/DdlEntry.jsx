import PropTypes from "prop-types";

export const DropDownEntry = ({
  entryClick = Function.prototype,
  optionText,
}) => {
  return (
    <div
      className="bg-black hover:bg-slate-800 text-white border-y-[1px] flex justify-center items-center border-white"
      onClick={entryClick}
    >
      <p className="mx-12 my-4">{optionText}</p>
    </div>
  );
};

DropDownEntry.propTypes = {
  entryClick: PropTypes.func,
  optionText: PropTypes.string,
};
