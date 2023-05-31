import React,{useEffect} from 'react'
import style  from './Modal.module.css'
import ModalOverlay from './ModalOverlay'
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import done from '../../../images/done.svg'
import PropTypes from 'prop-types';

export default function Modal({modalOnSale,isOpenModal,el,aboutIngridient}) {
  const escInfoHandler = () => {
        document.onkeydown = function(evt) {
          evt = evt || window.event;
          if (evt.keyCode === 27 && isOpenModal) {
            aboutIngridient();
          }
          else {
            modalOnSale()
          }
      };
  }
  useEffect(()=> {
    escInfoHandler()
  },[])
  return (
    <>
    {isOpenModal ? ( 
      <>
      <div className={style.Modal} id='ModalIcon'  >
      <div className={style.closeIcon}><CloseIcon type="primary" onClick={aboutIngridient} /></div>
      <p className="text text_type_main-large"> Детали ингридиента</p>
        <img src={el.image} className={style.ingridientImage} alt={el.name}/>
        <p className="text text_type_digits-default">{el.name}</p>
        <div className={style.nutrilonInfo}>
        <p className="text text_type_main-default text_color_inactive" id={style.c}>Калории,ккал<br/>{el.calories}</p>
        <p className="text text_type_main-default text_color_inactive">Белки, г<br/>{el.proteins}</p>
        <p className="text text_type_main-default text_color_inactive">Жиры, г<br/>{el.fat}</p>
        <p className="text text_type_main-default text_color_inactive">Углеводы, г <br/>{el.carbohydrates}</p>
        </div>
      </div>
      <ModalOverlay/>
      </>
     ) : (
     <>
     <div className={style.Modal} id='ModalIcon'>
            <div className={style.closeIcon}><CloseIcon type="primary" onClick={modalOnSale} /></div>
            <p className="text text_type_digits-large">12345890</p>
            <p className="text text_type_main-medium">Идентификатор заказа</p>
            <img className={style.logo} src={done} alt='Не загрузилось'/>
            <p className="text text_type_main-small">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
      </div>
        <ModalOverlay/>
      </>)}
    </>
  )
}

Modal.propTypes = {
  modalOnSale: PropTypes.func.isRequired ,
  isOpenModal: PropTypes.bool.isRequired,
  el : PropTypes.array.isRequired ,
  aboutIngridient: PropTypes.func.isRequired ,
}
