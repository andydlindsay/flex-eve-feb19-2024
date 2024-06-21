# M07W18 - Data Fetching & Other Side Effects

### To Do
- [x] Pure Functions and Side Effects
- [x] `useEffect`
- [x] Cleanup
- [x] Dependencies
- [x] _useEffect_ Flow

### Pure Function
* returns the same value given the same arguments
* has no side effects

```js
let additive = 10;
let count = null;

const addTwo = (num) => {
  count = 42;

  const result = num + additive;

  return result;
};
```

### Side Effects for React
* manipulating the DOM
* setting timers and intervals
* data fetching
* establishing a socket connection
* writing to standard out

```js
useEffect(() => {}); // runs on every render
useEffect(() => {}, [props.id]); // runs on the first render and called again if a value in the array changes
useEffect(() => {}, []); // only called on the initial render
```

```js
useEffect(() => {
  setCount(count + 1)
}, [count]);
```

DOS - denial of service



















