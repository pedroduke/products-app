import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useUpdateProductMutation, useGetProductByIdQuery } from '../app/api';

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, refetch } = useGetProductByIdQuery(id!);
  const [updateProduct] = useUpdateProductMutation();

  const [name, setName] = useState(data!.name);
  const [price, setPrice] = useState(data!.price);
  const [color, setColor] = useState(data!.color);
  const [description, setDescription] = useState(data!.description);

  const productDetails = {
    id,
    name,
    price,
    color,
    description,
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateProduct({ data: productDetails })
      .unwrap()
      .then(() => {
        navigate(`/products/${data!.id}`);
        refetch();
      });
  };

  return (
    <div>
      <h2 className='header__subtitle'>Edit Product Details</h2>
      <div className='products'>
        <form className='products__card' onSubmit={handleSubmit}>
          <div className='products__wrapper'>
            <label htmlFor='name'>Name:</label>
            <input
              className='products__input'
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='products__wrapper'>
            <label htmlFor='price'>Price:</label>
            <input
              className='products__input'
              type='number'
              id='price'
              value={price}
              onChange={(e) => setPrice(parseInt(e.target.value))}
            />
          </div>
          <div className='products__wrapper'>
            <label htmlFor='color'>Color:</label>
            <input
              className='products__input'
              type='text'
              id='color'
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div className='products__wrapper'>
            <label htmlFor='description'>Description:</label>
            <textarea
              className='products__input'
              id='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button className='save-button' type='submit'>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
