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
      <h2 className='header__subtitle'>Product Details</h2>
      <div className='products'>
        <div className='products__card'>
          <Link to={`/products/edit/${product!.id}`} className='products__card--details'>
            Edit
          </Link>
          <div className='products__wrapper'>
            <div>Name:</div>
            <span>{product!.name}</span>
            <div>Price:</div>
            <span>{product!.price}$</span>
            <div>Color:</div>
            <span>{product!.color}</span>
            <div>Description:</div>
            <span>{product!.description}</span>
          </div>
          <Link to={'/'} className='products__card--details products__card--details--left'>
            Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
