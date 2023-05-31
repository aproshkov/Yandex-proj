import React, { useState,useEffect } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import OneIngridient from './One-ingridient/OneIngridient';
import style from './BurgerIngredients.module.css';

export default function BurgerIngredients() {
  const [current, setCurrent] = useState('one');
  const urlAdress = 'https://norma.nomoreparties.space/api/ingredients'
  const [data, setData] = useState([]);
  useEffect(()=> {
    fetch(urlAdress)
    .then((response) => response.json())
    .then((response) => setData(response.data))
    .catch((e) => console.log(e));
  },[])

  return (
    <div className={style.BurgerIngredientsContainer}>
      <h1>Соберите бургер</h1>
      <div style={{ display: 'flex' }}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={style.TableIngridients} style={{}}>
      <div className={style.BurgerIngredientsBunContainer}>
        <h2>Булки</h2>
        <div className={style.BurgerIngredientsBun}>
          {data.map((ingridient) => {
            if (ingridient.type === 'bun') {
              return <OneIngridient key={ingridient.id} el={ingridient} />;
            }
            return null;
          })}
        </div>
      </div>
      <div className={style.BurgerIngredientsSauceContainer}>
        <h2>Соусы</h2>
        <div className={style.BurgerIngredientsSauce}>
          {data.map((ingridient) => {
            if (ingridient.type === 'sauce') {
              return <OneIngridient key={ingridient.id} el={ingridient} />;
            }
            return null;
          })}
        </div>
      </div>
      <div className={style.BurgerIngredientsMainContainer}>
        <h2>Начинки</h2>
        <div className={style.BurgerIngredientsMain}>
          {data.map((ingridient) => {
            if (ingridient.type === 'main') {
              return <OneIngridient key={ingridient.id} el={ingridient} />;
            }
            return null;
          })}
        </div>
      </div>
    </div>
    </div>
  );
}
