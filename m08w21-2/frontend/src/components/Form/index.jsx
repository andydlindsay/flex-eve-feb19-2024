import {useState} from 'react';

const Form = (props) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('/api/products', { 
      method: 'POST', 
      body: JSON.stringify({name, description, price}),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(product => {
        console.log(product);
        props.addProduct(product);
      });
  };

  return (
    <div>
      <h2>Create a new product!</h2>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input 
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br/>
        <label>Description</label>
        <input 
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <br/>
        <label>Price</label>
        <input 
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <br/>
        <button type="submit">Add!</button>
      </form>
    </div>
  );
};

export default Form;
