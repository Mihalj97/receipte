import Recipe from "./Recipe";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const APP_ID = "46adbe9e";
  const APP_KEY = "243d842a57615982c4b567f18d96f476";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  // Returns all data with "chicken"
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);

    // Another example of taking data from API
    // fetch(tps://api.edamam.com)
    // .then(response => {
    //   response.json
    // })
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <>
      <div className="App">
        <form onSubmit={getSearch} className="search-form">
          <input
            type="text"
            className="search-bar"
            value={search}
            onChange={updateSearch}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        <div className="recipes">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
