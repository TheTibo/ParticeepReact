import React from "react";
import PropTypes from "prop-types";
import "./styles/filter.css";

export default function Filter({
  categories,
  selectedCategories,
  onCategoryChange,
}) {
  const handleCheckboxChange = (category) => {
    if (selectedCategories.includes(category)) {
      onCategoryChange(selectedCategories.filter((item) => item !== category));
    } else {
      onCategoryChange([...selectedCategories, category]);
    }
  };

  return (
    <div className="FilterContainer">
      {categories.map((category) => (
        <div key={category}>
          <input
            type="checkbox"
            id={category}
            value={category}
            checked={selectedCategories.includes(category)}
            onChange={() => handleCheckboxChange(category)}
          />
          <label htmlFor={category}>{category}</label>
        </div>
      ))}
    </div>
  );
}

Filter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};
