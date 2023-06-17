import React from 'react'
import {DragIcon, ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components'
import style from './BurgerConstructorOneItem.module.css'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'
import { deleteIngridientConstructor } from '../../../../services/slices/ingridientsConstructorSlice';

export default function BurgerConstructorOneItem({el}) {
  const dispatch = useDispatch()
  return (
    <div className={style.IngridientCard}>
      <DragIcon type="primary" />
        <ConstructorElement
        text={el.name}
        price={el.price}
        thumbnail={el.image}
        handleClose={() => dispatch(deleteIngridientConstructor(el._id))}
      />
    </div>
  )
}

BurgerConstructorOneItem.propTypes = {
  el: PropTypes.object.isRequired
}