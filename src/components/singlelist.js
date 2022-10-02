import React from "react";
import PropTypes from "prop-types";

// Single List Item
const WrappedSingleListItem = ({ index, isSelected, onClickHandler, text }) => {
  return (
    <li
      key={index}
      style={{
        backgroundColor: isSelected ? "orange" : "blue",
        marginBottom: "10px",
        cursor: "pointer",
        padding: "50px",
        listStyle : "none"
      }}
      onClick={() => {
        onClickHandler(index);
      }}
    >
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default WrappedSingleListItem;
