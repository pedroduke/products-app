interface ProductInterface {
  id: string;
  name: string;
  data: {
    year: number;
    price: number;
    'CPU model': string;
    'Hard disk size': string;
  };
}

export default ProductInterface;
