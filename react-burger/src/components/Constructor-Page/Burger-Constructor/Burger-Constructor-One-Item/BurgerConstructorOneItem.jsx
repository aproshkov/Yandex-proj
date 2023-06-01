import React from 'react'
import {DragIcon, ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components'
import style from './BurgerConstructorOneItem.module.css'
import PropTypes from 'prop-types';

export default function BurgerConstructorOneItem({el}) {
  return (
    <div className={style.IngridientCard}>
      <DragIcon type="primary" />
        <ConstructorElement
        text={el.name}
        price={el.price}
        thumbnail={el.image}
      />
    </div>
  )
}

BurgerConstructorOneItem.propTypes = {
  el: PropTypes.object.isRequired
}