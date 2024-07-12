import './index.css';

const Product = (props) => {
  console.log(props);
  return (
    <div className="product">
      <h2>Name: {props.product.name}</h2>
      <h3>Description: {props.product.description}</h3>
      <h3>Price: ${props.product.price}</h3>
    </div>
  );
};

export default Product;