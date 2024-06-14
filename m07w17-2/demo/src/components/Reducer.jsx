import {useReducer} from 'react';

const initialState = {
  counter: 0
};

// making all updates to state
const reducer = (state, action) => {
  console.log('action', action);

  if (action.type === 'increment') {
    // copy the state and add 1 to the counter
    const copy = {
      ...state,
      counter: state.counter + 1,
    };

    // return the copy of state
    return copy;
  }

  if (action.type === 'decrement') {
    return {
      ...state,
      counter: state.counter - 1,
    };

    // return copy;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    // the argument you pass to dispatch is passed directly to the reducer function
    dispatch({ type: 'increment' });
  };

  const decrement = () => {
    dispatch({ type: 'decrement' });

    // dispatch({ type: 'add-topping', topping: 'mushrooms' })
  };

  return (
    <div>
      <h2>Reducer Component</h2>
      <h2>Counter: {state.counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Reducer;
