import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import "./key";
import Recipe from "./Recipe";
function App() {
  const [query, setQuery] = useState("Pomegranates");
  const [recipes, setRecipes] = useState([]);
  const YOUR_APP_ID = "969263ea";
  const YOUR_APP_KEY = "8736f43c3844f4c07364da23b961ad23";

  var url = ` https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=8&health=alcohol-free`;
  async function getRecipes() {
    var result = await axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  }
  useEffect(() => {
    getRecipes();
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };
  return (
    <div
      className="container-fluid pt-5"
      style={{ background: "linear-gradient(#000,#000)" }}
    >
      <div className="container-fluid mx-0 my-0 idja">
        <div className="col-12 text-center">
          <h1 onClick={getRecipes}>
            <span>P</span>rimo Sweets
          </h1>
          <hr className="col-8 mx-auto" />
          <p style={{ color: "#d9a7c7" }}>Please search for the recipe</p>
        </div>
      </div>
      <div className="container pt-5">
        <form
          class=" col-sm-12 d-flex flex-row justify-content-center"
          onSubmit={onSubmit}
        >
          <div class="col-auto">
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-danger mb-3">
              Search
            </button>
          </div>
        </form>
        <div className="col-12 pt-5">
          <div className="row">
            {recipes.map((recipe) => {
              return <Recipe recipe={recipe} />;
            })}
          </div>
        </div>
      </div>
      <div className="container text-center mt-5 pb-5">
        Copyrights ErzaBegu 2021
      </div>
    </div>
  );
}

export default App;
