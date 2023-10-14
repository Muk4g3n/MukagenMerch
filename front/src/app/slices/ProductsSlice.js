import { createSlice } from "@reduxjs/toolkit";

const initial = [];

const products = createSlice({
  name: "products",
  initialState: initial,
  reducers: {
    setProducts: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setProducts } = products.actions;

export default products.reducer;
