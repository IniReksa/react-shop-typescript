import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
   name: 'main',
   initialState: {
      product: 0
   },
   reducers: {
      addProduct: (state: any) => {
         state.product += 1
      }
   }
})

export const { addProduct } = mainSlice.actions

export default mainSlice.reducer