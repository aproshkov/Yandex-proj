import React,{useState} from 'react';
import style from './BurgerConstructor.module.css'
import BurgerConstructorOneItem from './Burger-Constructor-One-Item/BurgerConstructorOneItem';
import {CurrencyIcon,Button,ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../Modal-Burger/Modal'
import OrderDetails from './Order-Details/OrderDetails';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux'

export default function BurgerConstructor() {
  const burgerBase = 'Краторная булка N-200i'
  const allIngridients = useSelector(store => store.allIngridients)
  const ingridientsConstructor = useSelector(store => store.ingridientsConstructor)
  const [modal,setModal] = useState(false)
  const modalOnSale = () => {
    setModal(prevModal => !prevModal)
  }
  // const withthoutBulk = allIngridients.filter((el) => el.name !== burgerBase)
  
  return (
    <>
    {modal ? ( <Modal id='Modal' children={<OrderDetails />} modal={modal}  modalOnSale={modalOnSale}/>) : (null)}
    <div className={style.BurgerConstructorContainer}>
      <div className={style.topBurgerIngridient}>
      {allIngridients.map((el) => el.name === burgerBase ? (<ConstructorElement key={el._id} type="top" isLocked={true} text={el.name} price={el.price} thumbnail={el.image}/>): null)}
      </div>
      <div className={style.IngridientsTable}>
      {ingridientsConstructor.map((ingridient)=> <BurgerConstructorOneItem key={ingridient._id + 1} el={ingridient} /> )}
      </div>
      <div className={style.topBurgerIngridient}>
      {allIngridients.map((el) => el.name === burgerBase ? (<ConstructorElement key={el._id + 1} type="bottom" isLocked={true} text={el.name} price={el.price} thumbnail={el.image}/>): null)}
      </div>
      <div className={style.saleItog}>
        <p className={style.cost}>610</p>
        <span className={style.costIcon}>
        <CurrencyIcon type="primary" />
        </span>
        <Button htmlType="button" type="primary" size="medium" onClick={modalOnSale}>
          Оформить заказ
        </Button>
      </div>
    </div>
    </>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.array.isRequired,
}