import { useDispatch, useSelector } from "react-redux/";
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";

import { user, color, products } from "./slices";

const store = configureStore({
  reducer: {
    user,
    color,
    products,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default store;
