import React from "react";
import { categories } from "../../dummyData/dummyCategories";
import "./categories.css"

function Categories() {
  return (
    <div className="categoriesWrapper">
      {categories.map((category) => {
        return (
          <div className="eachCategory">
            <img src={category.image} alt="" />
            <div className="categoryInfo">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <button>SHOP NOW</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
