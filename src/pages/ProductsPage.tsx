import { Link } from 'react-router-dom';
import Product from '../interfaces/Product';

type ProductTypes = {
  productList: Product[];
};

const ProductsPage = ({ productList }: ProductTypes) => {
  return (
    <>
      <h2 className='header__subtitle'>Products List</h2>
      {productList.length > 0 ? (
        <ul className='products'>
          {productList.map((product) => {
            return (
              <li key={product.id} className='products__card'>
                <p className='products__card--name'>{product.name}</p>
                <Link to={`/products/${product.id}`} className='products__card--details'>
                  view details
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>there is no data</div>
      )}
    </>
  );
};

export default ProductsPage;
