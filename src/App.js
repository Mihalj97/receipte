import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const APP_ID = '46adbe9e'
  const APP_KEY = '243d842a57615982c4b567f18d96f476'


  const [counter, setCounter] = useState(0);

  useEffect(() => {
    getRecipes()
  }, []) 
  

  // Returns all data with "chicken"
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    console.log(data.hits);

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
      </div>
    </>
  );
}

export default App;
