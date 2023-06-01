import React from 'react'
import style from './IngredientDetails.module.css'

export default function IngredientDetails({el}) {
  return (
    <div className={style.IngredientDetailsContainer}>
        <p className="text text_type_main-large"> Детали ингридиента</p>
        <img src={el.image} className={style.ingridientImage} alt={el.name}/>
        <p className="text text_type_digits-default">{el.name}</p>
        <div className={style.nutrilonInfo}>
        <p className="text text_type_main-default text_color_inactive">Калории,ккал<br/>{el.calories}</p>
        <p className="text text_type_main-default text_color_inactive">Белки, г<br/>{el.proteins}</p>
        <p className="text text_type_main-default text_color_inactive">Жиры, г<br/>{el.fat}</p>
        <p className="text text_type_main-default text_color_inactive">Углеводы, г <br/>{el.carbohydrates}</p>
        </div>
    </div>
  )
}
