import React, { useState, useEffect } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';
import Card from './components/Card';
/*import CardContainer from './components/CardContainer'; */
import NavBar from './components/NavBar';
import Form from './components/Form';
import Map from './components/Map';
import Jumbotron from './components/Jumbotron';
// import coffee_shops from './data/london_coffee_shops.json';
import londonRestaurantData from './data/london_restaurants.json';
import Footer from './components/Footer.jsx';
// import axios from 'axios';
import Style from './components/card.css'

function App() {

  const [restaurantData, setRestaurantData] = useState([]);
  // const [reviews, setReview] = useState([])

  useEffect(() => {
    setRestaurantData(londonRestaurantData);
  }, []); 

  /*
async function getCoffeeShopsThroughWyre(){

  const options = {
    method: 'GET',
    url: 'https://wyre-data.p.rapidapi.com/coffee&shops/town/london',
    headers: {
      'X-RapidAPI-Key': 'afe98ac037msh3ce3820dfc89dc5p153212jsn68ab7789434e',
      'X-RapidAPI-Host': 'wyre-data.p.rapidapi.com'
    }
  };
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}


async function getCoffeeShopsThroughYelp(){
  const options = {
    method: 'GET',
    url: 'https://yelp-com.p.rapidapi.com/search/nearby/37.788719679657554/-122.40057774847898',
    params: {
      radius: '',
      term: 'Coffee Shops',
      offset: '0'
    },
    headers: {
      'X-RapidAPI-Key': 'afe98ac037msh3ce3820dfc89dc5p153212jsn68ab7789434e',
      'X-RapidAPI-Host': 'yelp-com.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

//getCoffeeShopsThroughWyre(options);

const  getCoffeeShops = ()=>{
  const londonCoffeeShops = londonRestaurantData.filter((rest) => (rest.BusinessName.toLowerCase().includes('coffee')) && rest.RatingValue.length==1 && rest.Geocode_Latitude!=null);
  const cafeRegex = /cafe/i;
  const cafes = londonRestaurantData.filter((rest) => (cafeRegex.test(rest.BusinessName) && rest.RatingValue.length==1 && rest.Geocode_Latitude!=null));

  console.log(JSON.stringify(cafes, null, 2));
  console.log(cafes.length)
}


getCoffeeShops();

*/

return (
  <>
    <NavBar />
    <Jumbotron />
    <div className="coffee-card-grid">
      {restaurantData.map((restaurant) => (
        <Card key={restaurant._id} shopId={restaurant._id} />
      ))}
    </div>
    <Map />
    <Form />
    <Footer />
  </>
);
}

export default App; 