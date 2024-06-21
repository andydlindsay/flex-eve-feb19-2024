import {useEffect, useState} from 'react';

const SideEffect = () => {
  const [counter, setCounter] = useState(0); // 11
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    if (counter <= 10) {
      document.title = `the counter is ${counter}`;
      console.log('setting the document title');
    }
  }, [counter]); // document.ready

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('the interval has fired');
    }, 1000);

    const cleanup = () => {
      // allows us to clean up after ourselves
      clearInterval(interval);
      console.log('clearing the interval');
    };

    return cleanup;
  });

  return (
    <div>
      <h2>SideEffect Component</h2>
      <h3>Count: {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>

      <div>
        <label>Search Term:</label>
        <input 
          value={searchTerm}
          onChange={(event) => { setSearchTerm(event.target.value) }}
        />
      </div>
    </div>
  );
};

export default SideEffect;
