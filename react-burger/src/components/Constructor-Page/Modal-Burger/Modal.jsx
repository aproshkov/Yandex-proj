import React,{useEffect} from 'react'
import style  from './Modal.module.css'
import ModalOverlay from './ModalOverlay'
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'
import { setEmptyIngridient } from '../../../services/slices/currentIngridientSlice';

export default function Modal({modal,modalOnSale,isOpenModal,aboutIngridient,children}) {
  const dispatch = useDispatch()
  const escapeKey = 27
  const escInfoHandler = () => {
        document.onkeydown = function(evt) {
          evt = evt || window.event;
          if (evt.keyCode === escapeKey && isOpenModal) {
            aboutIngridient();
            dispatch(setEmptyIngridient())
          }
          if (evt.keyCode === escapeKey && modal) {
            modalOnSale();
          }
      };
  }
  useEffect(()=> {
    escInfoHandler()
  })
  const onCloseModal = () => {
    if (isOpenModal) {
      aboutIngridient()
      dispatch(setEmptyIngridient())
    }
    if (modal) modalOnSale()
  }
  return (
    <>
    <div className={style.Modal} id='ModalIcon'  >
       <div className={style.closeIcon}><CloseIcon type="primary" onClick={onCloseModal} /></div>
       {children}
    </div>
    <div onClick={onCloseModal}><ModalOverlay/></div>
    </>
  )
}

Modal.propTypes = {
  modalOnSale: PropTypes.func,
  isOpenModal: PropTypes.bool,
  modal: PropTypes.bool,
  children : PropTypes.elementType.isRequired ,
  aboutIngridient: PropTypes.func,
}
