import React from 'react';
import PropTypes from 'prop-types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './OneIngridient.module.css';

export default function OneIngridient({ el }) {
  // OneIngridient.PropTypes = {
  //   el: PropTypes.string,
  // };
  return (
    <div className={style.OneIngridientContainer}>
      <img src={el.image} alt="" />
      <div className={style.ingrisientPriceContainer}>
        <p className={style.ingrisientPrice}>{el.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      {el.name}
    </div>
  );
}
