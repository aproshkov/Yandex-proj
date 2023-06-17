import { createSlice } from '@reduxjs/toolkit'; 

const orderSlice = createSlice ({
    name: 'order',
    initialState: {id: 123123},
    reducers: {
        setOrder(state,action) {
            return ([...state, ...action.payload])
        }
    }
})

export const {setOrder} = orderSlice.actions
export default orderSlice.reducer