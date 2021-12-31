import { createSlice } from '@reduxjs/toolkit'

export const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cartInfo:JSON.parse(localStorage.getItem("cart"))||[],
        cartpending:false,
        error:false
    },reducers:{
        setCart:(state,action)=>{
            state.cartInfo=action.payload;
        },
        addtoCart:(state,action)=>{
            state.cartInfo[0].products.push(action.payload.productId)
            state.cartInfo[0].quantity=action.payload.quantity;
        },
        removeFromCart:(state,action)=>{
            
        }
    }
})

export const {setCart,addtoCart,removeFromCart}=cartSlice.actions;
export default cartSlice.reducer;