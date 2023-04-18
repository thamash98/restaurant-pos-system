import './App.css';
import FoodTileContainer from './components/FoodTypeTile/FoodTileContainer';
import ItemTileContainer from './components/ItemTiles/ItemTileContainer';
import UpperNavBar from './components/NavBar/UpperNavBar';
import RecentOrderContainer from './components/RecentOrders/RecentOrderContainer';

function App() {
  return (
    <div className="App">
      <UpperNavBar/>
      <FoodTileContainer/>
      <RecentOrderContainer/>
      <ItemTileContainer/>
    </div>
  );
}

export default App;
