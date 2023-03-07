import { Link } from 'react-router-dom';
import ProductInterface from '../interfaces/ProductInterface';

type ProductTypes = {
  productList: ProductInterface[];
};

const HomePage = ({ productList }: ProductTypes) => {
  return (
    <>
      {productList.length > 0 ? (
        <ul>
          {productList.map((product) => {
            return (
              <li key={product.id}>
                <p>{product.name}</p>
                <Link to={`/products/${product.id}`}>view details</Link>
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

export default HomePage;
