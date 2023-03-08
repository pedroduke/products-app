import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Product from '../interfaces/Product';

type ProductTypes = {
  productList: Product[];
  updateProduct: (productDetails: Product) => void;
};

const ProductDetailPage = ({ productList, updateProduct }: ProductTypes) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = productList.find((product) => product.id === id);

  const [name, setName] = useState(product!.name);
  const [price, setPrice] = useState(product!.price);
  const [color, setColor] = useState(product!.color);
  const [description, setDescription] = useState(product!.description);

  const productDetails = {
    id: id,
    name: name,
    price: price,
    color: color,
    description: description,
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateProduct(productDetails);
    navigate(`/products/${product!.id}`);
  };

  return (
    <div>
      <h1>Product Detail</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor='price'>Price:</label>
          <input
            type='number'
            id='price'
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor='color'>color:</label>
          <input type='text' id='color' value={color} onChange={(e) => setColor(e.target.value)} />
        </div>
        <div>
          <label htmlFor='description'>Description:</label>
          <textarea
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type='submit'>Save</button>
      </form>
    </div>
  );
};

export default ProductDetailPage;
