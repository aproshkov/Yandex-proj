import { configureStore } from '@reduxjs/toolkit';
import setAllIngridientsReducer from './slices/allIngridientsSlice'
import setIngridientsConstructorReducer from './slices/ingridientsConstructorSlice'
import setCurrentIngridient from './slices/currentIngridientSlice'
import setOrder from './slices/orderSlice'

export default configureStore({
    reducer: {
        allIngridients: setAllIngridientsReducer,
        ingridientsConstructor: setIngridientsConstructorReducer,
        currentIngridient: setCurrentIngridient,
        order: setOrder,
    }
})