import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
/*import CardContainer from './components/CardContainer' */
import Form from './components/Form'
import NavBar from './components/NavBar'
import Map from './components/Map'
import Jumbotron from './components/Jumbotron'
import londonRestaurantData from './data/london_restaurants.json'

function App() {
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    setRestaurantData(londonRestaurantData);
  }, []); 

  return (
    <>
     <NavBar />
    <Jumbotron />
    <div> {restaurantData.map((restaurant) => (
      <Card key={restaurant._id} shopData={restaurant}/>
    ))} 
    </div>
    <Card />
    <Map />
    <Form />
    </>
  );
}

export default App