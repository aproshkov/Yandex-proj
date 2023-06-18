import React from 'react'
import style from './OrderDetails.module.css'
import done from '../../../../images/done.svg'
import {useSelector} from 'react-redux'

export default function OrderDetails() {
  const order = useSelector(store => store.order)
  return (
    <>
        <p className="text text_type_digits-large">{order.id}</p>
            <p className="text text_type_main-medium">Идентификатор заказа</p>
            <img className={style.logo} src={done} alt='Не загрузилось'/>
            <p className="text text_type_main-small">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
    </>
  )
}
