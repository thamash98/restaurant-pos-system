import './App.css';
import FoodTileContainer from './components/FoodTypeTile/FoodTileContainer';
import UpperNavBar from './components/NavBar/UpperNavBar';
import RecentOrderContainer from './components/RecentOrders/RecentOrderContainer';

function App() {
  return (
    <div className="App">
      <UpperNavBar/>
      <FoodTileContainer/>
      <RecentOrderContainer/>
    </div>
  );
}

export default App;
