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
        setPosIngridient: (state,action) => {
            
            // state.splice(
            //     action.payload.currentIndex,
            //     0,
            //     state.splice(action.payload.hoverIndex,1)[0]
            // )
            const element = state.find((item,index) => index === action.payload.currentIndex);
            state.splice(action.payload.currentIndex,1);
            // for (let i = 0 ; i < state.length; i++) {
            //   if (i === action.payload.hoverIndex) state.push(element)
            // }
            state.forEach((el,index) => {
              if (index === action.payload.hoverIndex) return element
              return el
            })
        }
      
    }
})

export const {setIngridientsConstructor,deleteIngridientConstructor,setBunIngridient,setPosIngridient} = ingridientsConstructorSlice.actions
export default ingridientsConstructorSlice.reducer