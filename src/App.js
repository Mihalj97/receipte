import Recipe from './Recipe';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const APP_ID = '46adbe9e'
  const APP_KEY = '243d842a57615982c4b567f18d96f476'

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    getRecipes()
  }, []) 
  

  // Returns all data with "chicken"
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)

    // Another example of taking data from API
    // fetch(tps://api.edamam.com)
    // .then(response => {
    //   response.json
    // })
  }

  return (
    <>
      <div className="App">
        <form className='search-form'>
          <input type="text" className='search-bar' />
          <button
            type="submit"
            className='search-button'>
            Search
          </button>
        </form>
        {recipes.map(recipe => (
          <Recipe
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
          />
        ))}
      </div>
    </>
  );
}

export default App;
