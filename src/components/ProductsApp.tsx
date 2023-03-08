import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ProductDetailPage from '../pages/ProductDetailsPage';
import EditProductPage from './EditProduct';

import Product from '../interfaces/Product';

const ProductsApp = () => {
  const [productList, setProductList] = useState<Product[]>(
    JSON.parse(localStorage.getItem('productList') || '[]')
  );

  useEffect(() => {
    if (productList.length > 0) {
      return;
    }
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/products');
      const data = await response.json();
      setProductList(data);
    };
    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    localStorage.setItem('productList', JSON.stringify(productList));
  }, [productList]);

  const updateProduct = (productDetails: Product) => {
    const updateProductList: Product[] = productList.map((product) => {
      if (product.id !== productDetails.id) {
        return product;
      }
      return productDetails;
    });
    setProductList(updateProductList);
  };

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage productList={productList} />} />
        <Route path='products'>
          <Route path=':id' index element={<ProductDetailPage productList={productList} />} />
          <Route
            path=':id/edit'
            element={<EditProductPage productList={productList} updateProduct={updateProduct} />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default ProductsApp;
