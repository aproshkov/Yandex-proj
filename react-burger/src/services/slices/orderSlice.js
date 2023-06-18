import { createSlice } from '@reduxjs/toolkit'; 

const UrlAdress = "https://norma.nomoreparties.space/api/orders";

const orderSlice = createSlice ({
    name: 'order',
    initialState: {id: 0,loading:false,failed:false},
    reducers: {
        setOrderNumber(state,action) {
            return ({
                ...state,
                loading: true,
              })
        },
        setOrderNumberSucses(state,action) {
            return {
                ...state,
                loading: false,
                id: action.payload,
              }
        },
        setOrderNumberFailed(state,action) {
            return ({
                ...state,
                loading: true,
                failed: true,
              });
        }
    }
})

const postData = (ingredients) => {
    return {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ingredients,
      }),
    };
  };

export const pushOrder = (itemsConsctructor) => (dispatch) => {
    fetch(UrlAdress, postData(itemsConsctructor))
    .then((res) => {
        if (res.ok) {
            return res.json()
        } else {
            throw new Error('Ошибка загрузки данных');
        }
    })
    .then((res) => dispatch(setOrderNumberSucses(res.order.number)))
    .catch((err) => {
        dispatch(setOrderNumberFailed());
      });
}

export const {setOrder,setOrderNumberSucses,setOrderNumberFailed} = orderSlice.actions
export default orderSlice.reducer