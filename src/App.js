import './App.css';
import FoodTileContainer from './components/FoodTypeTile/FoodTileContainer';
import UpperNavBar from './components/NavBar/UpperNavBar';

function App() {
  return (
    <div className="App">
      <UpperNavBar/>
      <FoodTileContainer/>
    </div>
  );
}

export default App;
