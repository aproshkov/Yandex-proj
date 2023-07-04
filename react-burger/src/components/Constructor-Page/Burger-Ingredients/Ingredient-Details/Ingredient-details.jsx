import React from 'react'
import style from './IngredientDetails.module.css'
import { useSelector } from 'react-redux'

export default function IngredientDetails() {
  const currentIngridient = useSelector(store => store.currentIngridient)
  return (
    <div className={style.IngredientDetailsContainer}>
        <p className="text text_type_main-large"> Детали ингридиента</p>
        <img src={currentIngridient.image} className={style.ingridientImage} alt={currentIngridient.name}/>
        <p className="text text_type_digits-default">{currentIngridient.name}</p>
        <div className={style.nutrilonInfo}>
        <p className="text text_type_main-default text_color_inactive">Калории,ккал<br/>{currentIngridient.calories}</p>
        <p className="text text_type_main-default text_color_inactive">Белки, г<br/>{currentIngridient.proteins}</p>
        <p className="text text_type_main-default text_color_inactive">Жиры, г<br/>{currentIngridient.fat}</p>
        <p className="text text_type_main-default text_color_inactive">Углеводы, г <br/>{currentIngridient.carbohydrates}</p>
        </div>
    </div>
  )
}
