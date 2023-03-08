import { Routes, Route } from 'react-router-dom';

import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailsPage';
import EditProduct from './components/EditProduct';

import Product from './interfaces/Product';

import useStorageOrFetch from './hooks/useStorageOrFetch';

const ProductsApp = () => {
  const [productList, setProductList, isLoading, error] = useStorageOrFetch<Product[]>(
    'http://localhost:5000/products',
    'productList'
  );

  if (isLoading) {
    return <h4>Loading...</h4>;
  }

  if (!!error) {
    return <h4>{error}</h4>;
  }

  const updateProduct = (productDetails: Product) => {
    if (productList) {
      const updateProductList: Product[] = productList.map((product) => {
        if (product.id !== productDetails.id) {
          return product;
        }
        return productDetails;
      });
      setProductList(updateProductList);
    }
  };

  return (
    <>
      <Routes>
        <Route path='/' element={<ProductsPage productList={productList!} />} />
        <Route
          path='products/:id'
          index
          element={<ProductDetailPage productList={productList!} />}
        />
        <Route
          path='products/edit/:id'
          element={<EditProduct productList={productList!} updateProduct={updateProduct} />}
        />
      </Routes>
    </>
  );
};

export default ProductsApp;
