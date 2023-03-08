import { Link } from 'react-router-dom';
import Product from '../interfaces/Product';

type ProductTypes = {
  productList: Product[];
};

const ProductsPage = ({ productList }: ProductTypes) => {
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

export default ProductsPage;
