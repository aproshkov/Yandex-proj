import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './OneIngridient.module.css';
import Modal from '../../Modal-Burger/Modal';
import IngredientDetails from '../Ingredient-Details/IngredientDetails'
import { useDispatch,useSelector } from 'react-redux'
import { setCurrentIngridient } from '../../../../services/slices/currentIngridientSlice';
import {useDrag} from 'react-dnd/dist/hooks'

export default function OneIngridient({ el }) {
  const [isOpenModal,setIsOpenModal] = useState(false)
  const dispatch = useDispatch()
  const aboutIngridient = () => {
    setIsOpenModal(previsOpenModal => !previsOpenModal)
    dispatch(setCurrentIngridient(el))
  }
  const [,ingDragRef] = useDrag({ type:'ingridient',item: el })

  const countIngredients = useSelector(
    (store) =>
      store.ingridientsConstructor.filter(
        (ingredient) => ingredient._id === el._id
      ).length
  );
  return (
    <>
    <div className={style.OneIngridientContainer} onClick={aboutIngridient} draggable ref={ingDragRef}>
      <div className={style.CounterContainer} size="default" extraClass="m-1" >
        <p className={style.Counter}>{countIngredients}</p>
      </div>
      <img src={el.image} alt="" />
      <div className={style.ingrisientPriceContainer}>
        <p className={style.ingrisientPrice}>{el.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      {el.name}
    </div>
    {isOpenModal ? (<Modal isOpenModal={isOpenModal} aboutIngridient={aboutIngridient} children={<IngredientDetails/>}/>) : (null)}
    </>
  );
}

OneIngridient.propTypes = {
  el: PropTypes.object.isRequired,
}