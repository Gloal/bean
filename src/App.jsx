import React, { useState, useEffect } from "react";
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// //import './App.css';
import Card from "./components/Card";
/*import CardContainer from './components/CardContainer'; */
import NavBar from "./components/NavBar";
import Form from "./components/Form";
//import Map from './components/Map';
import Jumbotron from "./components/Jumbotron";
// import coffee_shops from './data/london_coffee_shops.json';
import londonRestaurantData from "./data/london_restaurants.json";
import Footer from "./components/Footer.jsx";
import axios from "axios";
import Style from "./components/card.css";
import Map, {Marker} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import cafes from "./data/london_cafes_reduced.json"
import { Button } from "@mui/base";
import pin from './assets/Images/pin.svg'

function App() {
  const [restaurantData, setRestaurantData] = useState([]);
  // const [reviews, setReview] = useState([])

  useEffect(() => {
    setRestaurantData(londonRestaurantData);
  }, []);

  const [view, setView] = useState({
    longitude: -0.1,
    latitude: 40,
    zoom: 3.5,
    width: "100vw",
    height: "200vh",
  });

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


const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=20', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));


const options2 = {
  method: 'GET',
  url: 'https://yelp-com.p.rapidapi.com/search/nearby/51.5284576416016/-0.19754399359226',
  params: {
    radius: '5',
    term: 'cafe',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Key': 'afe98ac037msh3ce3820dfc89dc5p153212jsn68ab7789434e',
    'X-RapidAPI-Host': 'yelp-com.p.rapidapi.com'
  }
};

useEffect(()=>{
  async function getYelpCafes(){
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
  
  console.log(getYelpCafes());
 }, [])

*/
  const token =
    "pk.eyJ1IjoiZ2xvYWwiLCJhIjoiY2xzZWhta2F3MDN6MjJrb3VyYXhoOW9lZyJ9.2wbkCYCQgNFrl8EZj1NePA";

  return (
    <>
      <NavBar />
      <Jumbotron />
      <div className="coffee-card-grid">
        {restaurantData.map((restaurant) => (
          <Card key={restaurant._id} shopData={restaurant} />
        ))}
      </div>

      <div>
        <Map
          initialViewState={{
            longitude: -0.207,
            latitude: 51.5,
            zoom: 12
          }}
          mapboxAccessToken={token}
          style={{width: 1000, height:800}}
          mapStyle="mapbox://styles/gloal/clsfe7wn0008d01qxh5p67hdn"
          >
          {...cafes.map(cafe => (
            <Marker key={cafe._id} latitude={cafe.Geocode_Latitude} longitude={cafe.Geocode_Longitude}>
                <img src={pin} width="20px" height="20px" background="none" alt="cafe"/>
            </Marker>
            ))}
        </Map>
      </div>
      <Form />
      <Footer />
    </>
  );
}

export default App;
