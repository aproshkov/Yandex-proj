import React,{useEffect, useState} from 'react';
import style from './BurgerConstructor.module.css'
import BurgerConstructorOneItem from './Burger-Constructor-One-Item/BurgerConstructorOneItem';
import {CurrencyIcon,Button,ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../Modal-Burger/Modal'
import OrderDetails from './Order-Details/OrderDetails';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux'
import {useDrop} from 'react-dnd'
import {setBunIngridient, setIngridientsConstructor} from '../../../services/slices/ingridientsConstructorSlice'

export default function BurgerConstructor() {
  // const burgerBase = 'Краторная булка N-200i'
  const dispatch = useDispatch()
  const allIngridients = useSelector(store => store.allIngridients)
  const ingridientsConstructor = useSelector(store => store.ingridientsConstructor)
  const [modal,setModal] = useState(false)
  const modalOnSale = () => {
    setModal(prevModal => !prevModal)
  }
  // const withthoutBulk = allIngridients.filter((el) => el.name !== burgerBase)
  const [burgerBaseOpen , setBurgerBaseOpen] = useState (false)
  const [burgerBase , setBurgerBase] = useState ('')
  const [,dropRef] = useDrop({
    accept: 'ingridient',
    drop(item) {
      if(item.type === 'bun' && !burgerBaseOpen) {
        dispatch(setIngridientsConstructor(item))
        setBurgerBaseOpen(true)
        setBurgerBase(item.name)
      }
      if(item.type === 'bun' && burgerBaseOpen) {
        dispatch(setBunIngridient(item))
        setBurgerBase(item.name)
      }
      if (item.type !== 'bun')dispatch(setIngridientsConstructor(item))
    }
  })
  return (
    <>
    {modal ? ( <Modal id='Modal' children={<OrderDetails />} modal={modal}  modalOnSale={modalOnSale}/>) : (null)}
    <div className={style.BurgerConstructorContainer}>
      {burgerBaseOpen ? (
              <div className={style.topBurgerIngridient}>
              {allIngridients.map((el) => el.name === burgerBase ? (<ConstructorElement key={el._id} type="top" isLocked={true} text={el.name} price={el.price} thumbnail={el.image}/>): null)}
              </div>
      ) : null }
      <div className={style.IngridientsTable} ref={dropRef}>
      {ingridientsConstructor.map((ingridient,index)=> ingridient.type === 'bun' ? null : <BurgerConstructorOneItem key={ingridient._id + 1} el={ingridient} /> )}
      </div>
      {burgerBaseOpen ? (
              <div className={style.topBurgerIngridient}>
              {allIngridients.map((el) => el.name === burgerBase ? (<ConstructorElement key={el._id + 1} type="bottom" isLocked={true} text={el.name} price={el.price} thumbnail={el.image}/>): null)}
              </div>
      ) : null }
      <div className={style.saleItog}>
        <p className={style.cost}>{ingridientsConstructor.reduce((acc,el) => acc + el.price,0)}</p>
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

// BurgerConstructor.propTypes = {
//   data: PropTypes.array.isRequired,
// }