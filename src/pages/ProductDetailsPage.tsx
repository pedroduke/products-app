import { Link, useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../app/api';

const ProductDetailPage = () => {
  const { id } = useParams();

  const { data, isLoading, isError, refetch } = useGetProductByIdQuery(id!, {
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return <h4 className='info'>Loading...</h4>;
  }

  if (isError || !data) {
    return <h4 className='info'>Something went wrong</h4>;
  }

  return (
    <>
      <h2 className='header__subtitle'>Product Details</h2>
      <div className='products'>
        <div className='products__card'>
          <Link to={`/products/edit/${data.id}`} className='products__card--details'>
            Edit
          </Link>
          <div className='products__wrapper'>
            <div>Name:</div>
            <span>{data.name}</span>
            <div>Price:</div>
            <span>{data.price}$</span>
            <div>Color:</div>
            <span>{data.color}</span>
            <div>Description:</div>
            <span>{data.description}</span>
          </div>
          <Link
            to={'/'}
            onClick={refetch}
            className='products__card--details products__card--details--left'
          >
            Home Page
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
