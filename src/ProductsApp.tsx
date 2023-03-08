import { Routes, Route } from 'react-router-dom';

import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailsPage';
import EditProduct from './components/EditProduct';

import Product from './interfaces/Product';

import { useGetProductsQuery, useUpdateProductMutation } from './app/api';

const ProductsApp = () => {
  const { data, isLoading, isError, refetch } = useGetProductsQuery();

  const [updateProduct] = useUpdateProductMutation();

  if (isLoading) {
    return <h4>Loading Products...</h4>;
  }

  if (isError || !data) {
    return <h4>Something went wrong</h4>;
  }

  const handleUpdate = (productDetails: Product) => {
    updateProduct({ data: productDetails });
  };

  return (
    <>
      <Routes>
        <Route path='/' element={<ProductsPage productList={data} />} />
        <Route path='products/:id' index element={<ProductDetailPage />} />
        <Route
          path='products/edit/:id'
          element={<EditProduct productList={data} handleUpdate={handleUpdate} refetch={refetch} />}
        />
      </Routes>
    </>
  );
};

export default ProductsApp;
