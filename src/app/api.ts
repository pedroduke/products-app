import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import Product from '../interfaces/Product';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], any>({
      query: () => 'products',
    }),
    getProductById: builder.query<Product, string>({
      query: (productId: string) => `products/${productId}`,
    }),
    updateProduct: builder.mutation<Product, { data: Product }>({
      query: ({ data }) => ({
        url: `products/${data.id}`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery, useUpdateProductMutation } = api;
