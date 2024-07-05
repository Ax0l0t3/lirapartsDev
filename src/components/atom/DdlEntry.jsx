import PropTypes from "prop-types";

export const DropDownEntry = ({ optionText }) => {
  return (
    <div className="bg-black hover:bg-slate-800 text-white border-y-[1px] flex justify-center items-center border-white">
      <p className="mx-12 my-4">{optionText}</p>
    </div>
  );
};

DropDownEntry.propTypes = {
  optionText: PropTypes.string,
};
