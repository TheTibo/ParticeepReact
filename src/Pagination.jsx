import React from "react";
import PropTypes from "prop-types";
import "./styles/pagination.css";

export default function Pagination({
  page,
  totalPages,
  nextPage,
  previousPage,
  handleItemsPerPageChange,
}) {
  return (
    <div className="pageContainer">
      <div className="pageButtons">
        <img
          src="n4w.png"
          className="imgPage"
          onClick={() => handleItemsPerPageChange(4)}
        />

        <img
          src="src\assets\n8w.png"
          className="imgPage"
          onClick={() => handleItemsPerPageChange(8)}
        />

        <img
          src="src\assets\n12w.png"
          className="imgPage"
          onClick={() => handleItemsPerPageChange(12)}
        />
      </div>
      <div className="buttonPreviousNext">
        <button onClick={previousPage}>Précédent</button>

        <p>
          Page {page} / {totalPages}
        </p>

        <button onClick={nextPage}>Suivant</button>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  handleItemsPerPageChange: PropTypes.func.isRequired,
};
