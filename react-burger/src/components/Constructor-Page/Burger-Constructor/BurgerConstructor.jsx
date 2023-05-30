import React from 'react';
import style from './BurgerConstructor.module.css'
import data from '../../../utils/data';
import BurgerConstructorOneItem from './Burger-Constructor-One-Item/BurgerConstructorOneItem';
import {CurrencyIcon,Button,DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'

export default function BurgerConstructor() {
  return (
    <div className={style.BurgerConstructorContainer}>
      <div className={style.topBurgerIngridient}>
      {data.map((ingridient) => ingridient.name === 'Краторная булка N-200i' ? <BurgerConstructorOneItem el={ingridient}  /> : null)}
      </div>
      <div className={style.IngridientsTable}>
      {data.map((ingridient)=> ingridient.name === 'Краторная булка N-200i' ? null : <BurgerConstructorOneItem el={ingridient} /> )}
      </div>
      <div className={style.topBurgerIngridient}>
      {data.map((ingridient) => ingridient.name === 'Краторная булка N-200i' ? <BurgerConstructorOneItem el={ingridient} /> : null)}
      </div>
      <div className={style.saleItog}>
        <p className={style.cost}>610</p>
        <span className={style.costIcon}>
        <CurrencyIcon type="primary" />
        </span>
        <Button htmlType="button" type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}
