import { createSlice } from '@reduxjs/toolkit'; 

const ingridientsConstructorSlice = createSlice ({
    name: 'ingridientsConstructor',
    initialState: [],
    reducers: {
        setIngridientsConstructor(state,action) {
            return ([...state, action.payload])
        },
        setBunIngridient (state,action) {
              return  state.map(item => {
                  if (item.type === 'bun') {
                    return { ...action.payload };
                  }
                  return item;
                });
        },
        deleteIngridientConstructor: (state, action) => {
            const index = state.findIndex(item => item._id === action.payload);
            if (index !== -1) {
              state.splice(index, 1);
            }
          },
      
    }
})

export const {setIngridientsConstructor,deleteIngridientConstructor,setBunIngridient} = ingridientsConstructorSlice.actions
export default ingridientsConstructorSlice.reducer