import { setProducts } from "../app/slices/ProductsSlice";

import { useAppDispatch, useAppSelector } from "../app/store";

export default function useProducts() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products);

  const set = (products) => {
    dispatch(set(products));
  };
  return { products, setProducts: set };
}
