import { Link, useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../app/api';

const ProductDetailPage = () => {
  const { id } = useParams();

  const { data, isLoading, isError, refetch } = useGetProductByIdQuery(id!, {
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError || !data) {
    return <div>Something went wrong</div>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <Link to={`/products/edit/${data.id}`}>Edit</Link>
      <div>Name: {data.name}</div>
      <div>Price: {data.price}</div>
      <div>Color: {data.color}</div>
      <div>Description: {data.description}</div>
      <Link to={'/'} onClick={refetch}>
        Home Page
      </Link>
    </div>
  );
};

export default ProductDetailPage;
