import React from 'react'
import style from './recipe.module.css'

function Recipe({title, calories, image, ingredients}) {
  return (
      <div className={style.recipe}>
          <img src={image} alt="" className={style.image}/>
          <h1>{title}</h1>
          <ol>
              {ingredients.map(ingredient => (
                  <li>{ingredient.text}</li>
              ))}
          </ol>
          <p>{calories}</p>
          
    </div>
  )
}

export default Recipe