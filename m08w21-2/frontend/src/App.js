import './App.css';
import {useState, useEffect} from 'react';
import Product from './components/Product';
import Form from './components/Form';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products') // request to the backend
      .then(res => res.json())
      .then((products) => {
        // console.log(products);
        // setProducts(prev => [...prev, products]);
        setProducts(products);
      });
  }, []);

  const addProduct = (product) => {
    if (!product.name) { return; }
    setProducts([product, ...products]);
  };

  const mappedProducts = products.map((product) => {
    return (
        <Product key={product.id} product={product} />
    );
  });

  return (
    <div className="App">
      <h1>Welcome to our e-commerce site!</h1>

      <Form addProduct={addProduct} />

      { mappedProducts }
    </div>
  );
};

export default App;
