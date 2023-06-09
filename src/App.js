import './App.css';
import CartItemContainer from './components/Cart/CartItemContainer';
import DashboardContainer from './components/Dashboard/DashboardContainer';
import FoodTileContainer from './components/FoodTypeTile/FoodTileContainer';
import ItemTileContainer from './components/ItemTiles/ItemTileContainer';
import UpperNavBar from './components/NavBar/UpperNavBar';
import RecentOrderContainer from './components/RecentOrders/RecentOrderContainer';
import PriceContainer from './components/TotalPrice/PriceContainer';

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
      <CartItemContainer/>
      <PriceContainer/>
    </div>
  );
}

export default App;
