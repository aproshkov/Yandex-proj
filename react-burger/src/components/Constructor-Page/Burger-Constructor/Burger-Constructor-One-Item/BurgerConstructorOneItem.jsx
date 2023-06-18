import React, { useRef } from 'react'
import {DragIcon, ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components'
import style from './BurgerConstructorOneItem.module.css'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'
import { deleteIngridientConstructor } from '../../../../services/slices/ingridientsConstructorSlice';
import { useDrop, useDrag } from "react-dnd";
import { setPosIngridient } from '../../../../services/slices/ingridientsConstructorSlice';

export default function BurgerConstructorOneItem({el,index}) {
  const dispatch = useDispatch()
  const ref = useRef()
  const [, drop] = useDrop({
    accept: "ingredientList",
    hover(item, focus) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = focus.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      dispatch(setPosIngridient({dragIndex,hoverIndex}))
      item.index = hoverIndex;
    },
  });

  const [, dragRef] = useDrag({
    type: "ingredientList",
    item: () => {
      return { ...el._id,index };
    },
  });
 
  dragRef(drop(ref));
  return (
    <div className={style.IngridientCard} ref={ref}>
      <DragIcon type="primary" />
        <ConstructorElement
        text={el.name}
        price={el.price}
        thumbnail={el.image}
        handleClose={() => dispatch(deleteIngridientConstructor(el._id))}
      />
    </div>
  )
}

BurgerConstructorOneItem.propTypes = {
  el: PropTypes.object.isRequired
}