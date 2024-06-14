import { useState } from "react";

const Pizza = () => {
  const [newTopping, setNewTopping] = useState('');
  // const [toppings, setToppings] = useState([]);
  // const [crustType, setCrustType] = useState('stuffed');

  const [pizza, setPizza] = useState({
    toppings: [],
    crustType: 'pan',
  });

  // $.post('/pizza', pizza);

  const addButtonClickHandler = () => {
    const newPizza = {
      ...pizza,
      toppings: [
        newTopping,
        ...pizza.toppings,
      ]
    };

    setPizza(newPizza);
  };

  const updateCrust = (event) => {
    const copyPizza = {
      ...pizza,
      crustType: event.target.value,
    };

    setPizza(copyPizza);
  };

  const mappedToppings = pizza.toppings.map((topping) => {
    return <p>{topping}</p>;
  });

  return (
    <div>
      <h2>Create your own Pizza!</h2>

      <div>
        <label>Crust Type:</label>
        <input 
          value={pizza.crustType}
          onChange={updateCrust}
        />
        <h2>Crust: {pizza.crustType}</h2>
      </div>

      <div>
        <label>New topping:</label>
        <input 
          value={newTopping}
          onChange={(event) => { setNewTopping(event.target.value) }}
        />
        <button onClick={addButtonClickHandler}>Add</button>
      </div>

      <h2>Toppings:</h2>
      { mappedToppings }
    </div>
  );
};

export default Pizza;
