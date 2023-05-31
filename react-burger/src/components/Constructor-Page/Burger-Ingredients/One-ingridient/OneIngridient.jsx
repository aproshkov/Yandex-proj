import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './OneIngridient.module.css';
import Modal from '../../Modal-Burger/Modal';

export default function OneIngridient({ el }) {
  const [isOpenModal,setIsOpenModal] = useState(false)
  const aboutIngridient = () => {
    setIsOpenModal(previsOpenModal => !previsOpenModal)
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
    {isOpenModal ? (<Modal el={el} isOpenModal={isOpenModal} aboutIngridient={aboutIngridient}/>) : (null)}
    </>
  );
}

OneIngridient.propTypes = {
  el: PropTypes.array.isRequired,
}