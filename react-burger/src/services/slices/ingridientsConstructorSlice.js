import { createSlice } from '@reduxjs/toolkit'; 

const ingridientsConstructorSlice = createSlice ({
    name: 'ingridientsConstructor',
    initialState: [],
    reducers: {
        setIngridientsConstructor(state,action) {
            return ([...state, {...action.payload.item,uuid: action.payload.uuid}])
        },
        setBunIngridient (state,action) {
              return  state.map(item => {
                  if (item.type === 'bun') {
                    return { ...action.payload.item,uuid: action.payload.uuid };
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
        setPosIngridient: (state,action) => { 
            state.splice(
                action.payload.dragIndex,
                0,
                state.splice(action.payload.hoverIndex,1)[0]
            )
        }
    }
})

export const {setIngridientsConstructor,deleteIngridientConstructor,setBunIngridient,setPosIngridient} = ingridientsConstructorSlice.actions
export default ingridientsConstructorSlice.reducer