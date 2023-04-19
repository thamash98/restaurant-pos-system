import './App.css';
import DashboardContainer from './components/Dashboard/DashboardContainer';
import FoodTileContainer from './components/FoodTypeTile/FoodTileContainer';
import ItemTileContainer from './components/ItemTiles/ItemTileContainer';
import UpperNavBar from './components/NavBar/UpperNavBar';
import RecentOrderContainer from './components/RecentOrders/RecentOrderContainer';

function App() {
  return (
    <div className="App">
      <UpperNavBar/>
      <div className='centerComponent'>
        <div className='leftComponent'>
          <DashboardContainer/>
          <RecentOrderContainer/>
        </div>
        <div className='innerCenter'>
          <FoodTileContainer/>
          <ItemTileContainer/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
