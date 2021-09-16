import React from "react";
const Recipe = ({ recipe }) => {
  const rec = recipe["recipe"]["ingredientLines"];
  return (
    <div className="col-12 col-md-6 col-lg-3 text-center">
      <img
        className="img-fluid img-rounded mt-5"
        src={recipe["recipe"]["image"]}
      />

      <p
        className="mt-3 mb-0"
        style={{ color: "#f7797d", fontFamily: " 'Courgette', cursive" }}
      >
        {" "}
        {recipe["recipe"]["label"]}
      </p>
      <p className="mb-0">Dish Type : {recipe["recipe"]["dishType"]}</p>
      <p>Cuisine type : {recipe["recipe"]["cuisineType"]}</p>
    </div>
  );
};
export default Recipe;
