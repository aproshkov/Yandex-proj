import React from 'react'
import BurgerIngredients from './Burger-Ingredients/BurgerIngredients'
import style from './MainConstructorPage.module.css'
import BurgerConstructor from './Burger-Constructor/BurgerConstructor'

export default function MainConstructorPage() {
  return (
    <div className={style.MainConstructorPageContainer}>
        <BurgerIngredients/>
        <BurgerConstructor/>
    </div>
  )
}
