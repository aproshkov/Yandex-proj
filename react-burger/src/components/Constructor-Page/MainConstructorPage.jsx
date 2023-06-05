import React,{useState,useEffect} from 'react'
import BurgerIngredients from './Burger-Ingredients/BurgerIngredients'
import style from './MainConstructorPage.module.css'
import BurgerConstructor from './Burger-Constructor/BurgerConstructor'

export default function MainConstructorPage() {
  const [data, setData] = useState([]);
  const urlAddress = 'https://norma.nomoreparties.space/api/ingredients'
  useEffect(()=> {
    fetch(urlAddress)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Ошибка загрузки данных');
      }
    })
    .then((response) => setData(response.data))
    .catch((e) => console.log(e));
  },[])
  return (
    <div className={style.MainConstructorPageContainer}>
        <BurgerIngredients data={data}/>
        <BurgerConstructor data={data}/>
    </div>
  )
}
