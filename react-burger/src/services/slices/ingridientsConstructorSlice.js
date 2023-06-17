import { createSlice } from '@reduxjs/toolkit'; 

const ingridientsConstructorSlice = createSlice ({
    name: 'ingridientsConstructor',
    initialState: [],
    reducers: {
        setIngridientsConstructor(state,action) {
            return ([...state, ...action.payload])
        }
    }
})

export const {setIngridientsConstructor} = ingridientsConstructorSlice.actions
export default ingridientsConstructorSlice.reducer