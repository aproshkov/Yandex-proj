import React from 'react'
import style from './OrderDetails.module.css'
import done from '../../../../images/done.svg'

export default function OrderDetails() {
  return (
    <>
        <p className="text text_type_digits-large">12345890</p>
            <p className="text text_type_main-medium">Идентификатор заказа</p>
            <img className={style.logo} src={done} alt='Не загрузилось'/>
            <p className="text text_type_main-small">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
    </>
  )
}
