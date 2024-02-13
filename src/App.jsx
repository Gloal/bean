import React, { useState, useEffect } from "react";
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// //import './App.css';
import Card from "./components/Card";
/*import CardContainer from './components/CardContainer'; */
import NavBar from "./components/NavBar";
import Form from "./components/AddEditForm";
import Jumbotron from "./components/Jumbotron";
import londonRestaurantData from "./data/london_restaurants.json";
import Footer from "./components/Footer.jsx";
import MapComp from "./components/MapComp.jsx";
import cafes from "./data/london_cafes_reduced.json";

function App() {
  const [restaurantData, setRestaurantData] = useState([]);
  // const [reviews, setReview] = useState([])


  useEffect(() => {
    const storedCafes = localStorage.getItem("cafes");
    if(storedCafes){
      setRestaurantData(JSON.parse(storedCafes));
    }else{
      setRestaurantData(londonRestaurantData);
      localStorage.setItem('cafes', JSON.stringify(londonRestaurantData))
    }
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

      <MapComp
        data={restaurantData}
        token="pk.eyJ1IjoiZ2xvYWwiLCJhIjoiY2xzaTJobWpmMHFwMTJpcG5kampmdHZwbCJ9.d10-z1S4GiGH25co9SnrKw"
      />

      <Form cafes={restaurantData}/>
      <Footer />
    </>
  );
}

export default App;
