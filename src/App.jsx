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
import MapComp from "./components/MapComp.jsx"
import cafes from "./data/london_cafes_reduced.json";

function App() {
  const [restaurantData, setRestaurantData] = useState([]);
  // const [reviews, setReview] = useState([])

  useEffect(() => {
    setRestaurantData(londonRestaurantData);
  }, []);


  return (
    <>
      <NavBar />
      <Jumbotron />
      <div className="coffee-card-grid">
        {restaurantData.map((restaurant) => (
          <Card key={restaurant._id} shopId={restaurant._id} />
        ))}
      </div>

        <MapComp data={restaurantData} 
          token ="pk.eyJ1IjoiZ2xvYWwiLCJhIjoiY2xzaTJobWpmMHFwMTJpcG5kampmdHZwbCJ9.d10-z1S4GiGH25co9SnrKw"
          />



{/*


        <Map
          initialViewState={{
            longitude: -0.207,
            latitude: 51.5,
            zoom: 12,
          }}
          mapboxAccessToken={token}
          style={{ width: 1200, height: 800, position: "center" }}
          mapStyle="mapbox://styles/gloal/clsfe7wn0008d01qxh5p67hdn"

          data={londonRestaurantData}
         
        >
          {...londonRestaurantData.map((cafe) => (
            <Marker
              key={cafe._id}
              latitude={cafe.Geocode_Latitude}
              longitude={cafe.Geocode_Longitude}
            >
              {/*
              <Button background="none"border="none" cursor="pointer" onClick={(e)=>{
                e.preventDefault();
                console.log(cafe);
                setSelectedCafe(cafe);
              }}>
              <img src={pin} width="20px" height="30px" background="none" alt="cafe-icon"/>

              </Button>


              <img
                src={pin}
                width="25px"
                height="30px"
                background="none"
                alt="cafe-icon"
                cursor="pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedCafe(cafe);
                  console.log(selectedCafe);
                }}
              />
            </Marker>
          ))}

          {selectedCafe ? (
            <Popup
            height="200px" width="200px"
            align-items="center"
              longitude={selectedCafe.Geocode_Longitude}
              latitude={selectedCafe.Geocode_Latitude}
              closeOnClick={false}
              onClose={() => {
                setSelectedCafe(null);
              }}>
              <Card key={selectedCafe._id} shopId={selectedCafe._id} />
            </Popup>
          ):null}

        </Map>
      </div>


            */}

      <Form />
      <Footer />
    </>
  );
}

export default App;
