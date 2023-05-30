import React from 'react'
import {DragIcon, CurrencyIcon,DeleteIcon,LockIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import style from './BurgerConstructorOneItem.module.css'

export default function BurgerConstructorOneItem({el}) {
  return (
    <div className={style.IngridientCard}>
      {el.name === 'Краторная булка N-200i' ? (
        null
      ) : (<DragIcon type="primary" />)}
      <div className={style.OneElementContainer}>
        <img src={el.image} alt=''/>
        <div className={style.text}>
        {el.name}
        </div>
        <div className={style.infoBlock}>
          {el.price}
          <CurrencyIcon type="primary" />
          {el.name === 'Краторная булка N-200i' ? (    
            <LockIcon type="primary" />
          ) : (
            <DeleteIcon type="primary" />
          ) }
          
        </div>
      </div>
    </div>
  )
}
