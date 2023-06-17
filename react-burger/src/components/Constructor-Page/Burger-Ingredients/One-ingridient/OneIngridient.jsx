import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './OneIngridient.module.css';
import Modal from '../../Modal-Burger/Modal';
import IngredientDetails from '../Ingredient-Details/IngredientDetails'
import { useDispatch } from 'react-redux'
import { setCurrentIngridient } from '../../../../services/slices/currentIngridientSlice';

export default function OneIngridient({ el }) {
  const [isOpenModal,setIsOpenModal] = useState(false)
  const dispatch = useDispatch()
  const aboutIngridient = () => {
    setIsOpenModal(previsOpenModal => !previsOpenModal)
    dispatch(setCurrentIngridient(el))
  }
  return (
    <>
    <div className={style.OneIngridientContainer} onClick={aboutIngridient} >
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