import React from "react";

const Categories = ({ categories, filterMenu }) => {
  return (
    <div className="btn-container">
      {categories.map((category, idx) => (
        <button key={idx} onClick={() => filterMenu(category)} type="button" className="btn">
          { category }
        </button>
      ))}
    </div>
  );
};

export default Categories;
