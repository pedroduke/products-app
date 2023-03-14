import { Link } from 'react-router-dom';

import { currency } from '../helpers/helpers';
import { useGetProductsQuery } from '../app/api';

const ProductsPage = () => {
  const { data, isLoading, isError } = useGetProductsQuery({}, { refetchOnMountOrArgChange: true });

  if (isLoading) {
    return <h4 className='info'>Loading Products...</h4>;
  }

  if (isError || !data) {
    return <h4 className='info'>Something went wrong</h4>;
  }

  return (
    <>
      <h2 className='header__subtitle'>Products List</h2>
      {data.length > 0 ? (
        <ul className='products'>
          {data.map((product) => {
            return (
              <li key={product.id} className='products__card'>
                <p className='products__card--name'>{product.name}</p>
                <p className='products__card--name'>{currency(product.price)}</p>
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
