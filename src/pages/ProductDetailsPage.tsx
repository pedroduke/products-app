import { Link, useParams } from 'react-router-dom';

import Product from '../interfaces/Product';

type ProductTypes = {
  productList: Product[];
};

const ProductDetailPage = ({ productList }: ProductTypes) => {
  const { id } = useParams();
  const product = productList.find((product) => product.id === id);

  return (
    <div>
      <h1>Product Detail</h1>
      <div>Name: {product!.name}</div>
      <div>Price: {product!.price}</div>
      <div>Color: {product!.color}</div>
      <div>Description: {product!.description}</div>
      <Link to={`/products/${product!.id}/edit`}>Edit</Link>
      <Link to={'/'}>Home Page</Link>
    </div>
  );
};

export default ProductDetailPage;
