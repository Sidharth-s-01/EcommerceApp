import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartInfo: JSON.parse(localStorage.getItem("cart")) || null,
    cartpending: false,
    error: false,
  },
  reducers: {
    setCart: (state, action) => {
      state.cartInfo = action.payload;
    },
    addtoCart: (state, action) => {
      let flag = false;
      for (let step = 0; step < state.cartInfo[0].products.length; step++) {
        if (
          state.cartInfo[0].products[step].productId ===
          action.payload.productId
        ) {
          flag = true;
          break;
        } else {
          flag=false
        }
      }

      if (!flag) {
        state.cartInfo[0].products.push({
          productId: action.payload.productId,
          quantity: action.payload.quantity,
        });
      }
    },
    removeFromCart: (state, action) => {},
  },
});

export const { setCart, addtoCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
