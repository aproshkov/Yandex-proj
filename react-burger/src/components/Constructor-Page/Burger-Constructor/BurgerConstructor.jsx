import React,{ useState} from 'react';
import style from './BurgerConstructor.module.css'
import BurgerConstructorOneItem from './Burger-Constructor-One-Item/Burger-constructor-one-item';
import {CurrencyIcon,Button,ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../Modal-Burger/Modal'
import OrderDetails from './Order-Details/Order-details';
import { useSelector, useDispatch } from 'react-redux'
import {useDrop} from 'react-dnd'
import {setBunIngridient, setIngridientsConstructor} from '../../../services/slices/ingridientsConstructorSlice'
import { v4 as uuidv4 } from 'uuid'
import { pushOrder } from '../../../services/slices/orderSlice';

export default function BurgerConstructor() {
  const dispatch = useDispatch()
  const allIngridients = useSelector(store => store.allIngridients)
  const ingridientsConstructor = useSelector(store => store.ingridientsConstructor)
  const [modal,setModal] = useState(false)
  const modalOnSale = () => {
    setModal(prevModal => !prevModal)
    dispatch(pushOrder(ingridientsConstructor.map((el) => el._id)))
  }

  const [burgerBaseOpen , setBurgerBaseOpen] = useState (false)
  const [burgerBase , setBurgerBase] = useState ('')
  const uuid = uuidv4();
  const [,dropRef] = useDrop({
    accept: 'ingridient',
    drop(item) {
      if(item.type === 'bun' && !burgerBaseOpen) {
        dispatch(setIngridientsConstructor({item,uuid}))
        dispatch(setIngridientsConstructor({item,uuid}))
        setBurgerBaseOpen(true)
        setBurgerBase(item.name)
      }
      if(item.type === 'bun' && burgerBaseOpen) {
        dispatch(setBunIngridient({item,uuid}))
        setBurgerBase(item.name)
      }
      if (item.type !== 'bun')dispatch(setIngridientsConstructor({item,uuid}))
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
      ) : <h3>Сперва перенесите булку</h3> }
      <div className={style.IngridientsTable} ref={dropRef}>
      {ingridientsConstructor.map((ingridient,index)=> ingridient.type === 'bun' ? null : <BurgerConstructorOneItem key={ingridient._id + index} el={ingridient} index={index} /> )}
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
