import React,{useEffect,useState} from 'react';
import style from './BurgerConstructor.module.css'
import BurgerConstructorOneItem from './Burger-Constructor-One-Item/BurgerConstructorOneItem';
import {CurrencyIcon,Button,ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../Modal-Burger/Modal'

export default function BurgerConstructor() {
  const urlAdress = 'https://norma.nomoreparties.space/api/ingredients'
  const [modal,setModal] = useState(false)
  const [data, setData] = useState([]);
  useEffect(()=> {
    fetch(urlAdress)
    .then((response) => response.json())
    .then((response) => setData(response.data))
    .catch((e) => console.log(e));
  },[])
  const modalOnSale = () => {
    setModal(prevModal => !prevModal)
  }
  return (
    <>
    {modal ? ( <Modal id='Modal'  modalOnSale={modalOnSale}/>) : (null)}

    <div className={style.BurgerConstructorContainer}>
      <div className={style.topBurgerIngridient}>
      {data.map((ingridient) => ingridient.name === 'Краторная булка N-200i' ? ( <ConstructorElement
        type="top"
        isLocked={true}
        text={ingridient.name}
        price={ingridient.price}
        thumbnail={ingridient.image}
      />) : null)}
      </div>
      <div className={style.IngridientsTable}>
      {data.map((ingridient)=> ingridient.name === 'Краторная булка N-200i' ? null : <BurgerConstructorOneItem el={ingridient} /> )}
      </div>
      <div className={style.topBurgerIngridient}>
      {data.map((ingridient) => ingridient.name === 'Краторная булка N-200i' ? ( <ConstructorElement
        type="bottom"
        isLocked={true}
        text={ingridient.name}
        price={ingridient.price}
        thumbnail={ingridient.image}
      />) : null)}
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
