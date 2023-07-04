import { createSlice } from '@reduxjs/toolkit'; 

const currentIngridientSlice = createSlice ({
    name: 'currentIngridient',
    initialState: {},
    reducers: {
        setCurrentIngridient(state,action) {
            return action.payload
        },
        setEmptyIngridient(state,action) {
            return {}
        }
    }
})

export const {setCurrentIngridient,setEmptyIngridient} = currentIngridientSlice.actions
export default currentIngridientSlice.reducer