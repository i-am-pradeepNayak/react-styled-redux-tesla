import { useSelector } from 'react-redux';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  const state = useSelector(state => state.SliceReducer.cars);
  console.log(state);
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
