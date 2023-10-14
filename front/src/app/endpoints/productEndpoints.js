import { apiSlice } from "../slices/apiSlice";

const products_URL = "/products";

export const productApiEndpoints = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (data) => ({
        url: `${products_URL}/add`,
        method: "POST",
        body: data,
      }),
    }),
    delProduct: builder.mutation({
      query: (data) => ({
        url: `${products_URL}/delete`,
        method: "DELETE",
        body: data,
      }),
    }),
    getProducts: builder.mutation({
      query: () => ({
        url: `${products_URL}/getproducts`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAddProductMutation,
  useDelProductMutation,
  useGetProductsMutation,
} = productApiEndpoints;
