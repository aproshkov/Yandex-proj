import React from 'react'
import BurgerIngredients from './Burger-Ingredients/BurgerIngredients'
import style from './MainConstructorPage.module.css'
import BurgerConstructor from './Burger-Constructor/BurgerConstructor'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function MainConstructorPage() {
  return (
    <div className={style.MainConstructorPageContainer}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients />
        <BurgerConstructor />
      </DndProvider>
    </div>
  )
}
