import { Routes, Route, Navigate } from 'react-router-dom';

import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailsPage';
import EditProduct from './components/EditProduct';

const ProductsApp = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<ProductsPage />} />
        <Route path='products/:id' index element={<ProductDetailPage />} />
        <Route path='products/edit/:id' element={<EditProduct />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
};

export default ProductsApp;
