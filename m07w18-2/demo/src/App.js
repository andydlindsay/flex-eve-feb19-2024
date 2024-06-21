import './App.css';

// import SideEffect from './components/SideEffect';
import DataFetching from './components/DataFetching';

const App = () => {
  return (
    <div className="App">
      <h2>Side Effects</h2>

      {/* <SideEffect /> */}
      <DataFetching />
    </div>
  );
};

export default App;
