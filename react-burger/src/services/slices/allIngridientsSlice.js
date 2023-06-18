import { createSlice } from '@reduxjs/toolkit';

const urlAddress = 'https://norma.nomoreparties.space/api/ingredients'

const allIngridientsSlice = createSlice ({
    name: 'allIngridients',
    initialState: [],
    reducers: {
        setAllIngridients(state,action) {
            return action.payload
        }
    }
})

 export const { setAllIngridients } = allIngridientsSlice.actions
 export default allIngridientsSlice.reducer

export const getIngridients = () => (dispatch) => {
    fetch(urlAddress)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Ошибка загрузки данных');
      }
    })
    .then((response) => dispatch(setAllIngridients(response.data)))
    .catch((e) => console.log(e));
}