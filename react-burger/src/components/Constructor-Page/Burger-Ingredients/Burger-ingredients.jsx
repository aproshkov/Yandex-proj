import React, { useEffect, useState, useRef } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import OneIngridient from './One-ingredient/One-ingredient';
import style from './BurgerIngredients.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { getIngridients } from '../../../services/slices/allIngridientsSlice';

export default function BurgerIngredients() {
  const [current, setCurrent] = useState('one');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngridients())
  },[])
  const allIngridients = useSelector(store => store.allIngridients)
  const containerRef = useRef();
  const bunsRef = useRef();
  const saucesRef = useRef();
  const fillingsRef = useRef();
  const scrollHandling = () => {
    if (
      containerRef.current.getBoundingClientRect().top >
      bunsRef.current.getBoundingClientRect().top
    ) {
      setCurrent("one");
    }

    if (
      containerRef.current.getBoundingClientRect().top >
      saucesRef.current.getBoundingClientRect().top
    ) {
      setCurrent("two");
    }

    if (
      containerRef.current.getBoundingClientRect().top >
      fillingsRef.current.getBoundingClientRect().top
    ) {
      setCurrent("three");
    }
  };
  const setTab = (state, element) => {
    element.current.scrollIntoView({ behaviour: "smooth" });
  };
  return (
    <div className={style.BurgerIngredientsContainer}>
      <h1>Соберите бургер</h1>
      <div style={{ display: 'flex' }}>
        <Tab value="one" active={current === 'one'} onClick={(e) => setTab(e,bunsRef)} id={'one'}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={(e) => setTab(e,saucesRef)} id={'two'}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={(e) => setTab(e,fillingsRef)} id={'three'}>
          Начинки
        </Tab>
      </div>
      <div className={style.TableIngridients} style={{}} ref={containerRef} onScroll={scrollHandling} >
      <div className={style.BurgerIngredientsBunContainer}>
        <h2 >Булки</h2>
        <div className={style.BurgerIngredientsBun} ref={bunsRef}>
          {allIngridients.map((ingridient) => {
            if (ingridient.type === 'bun') {
              return <OneIngridient key={ingridient._id} el={ingridient} />;
            }
            return null;
          })}
        </div>
      </div>
      <div className={style.BurgerIngredientsSauceContainer}>
        <h2 >Соусы</h2>
        <div className={style.BurgerIngredientsSauce} ref={saucesRef}>
          {allIngridients.map((ingridient) => {
            if (ingridient.type === 'sauce') {
              return <OneIngridient key={ingridient._id} el={ingridient} />;
            }
            return null;
          })}
        </div>
      </div>
      <div className={style.BurgerIngredientsMainContainer}>
        <h2 >Начинки</h2>
        <div className={style.BurgerIngredientsMain} ref={fillingsRef}>
          {allIngridients.map((ingridient) => {
            if (ingridient.type === 'main') {
              return <OneIngridient key={ingridient._id} el={ingridient} />;
            }
            return null;
          })}
        </div>
      </div>
    </div>
    </div>
  );
}
