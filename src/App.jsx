import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// //import './App.css';
import Card from "./components/Card.jsx";
/*import CardContainer from './components/CardContainer'; */
import NavBar from "./components/NavBar";
import ReviewForm from "./components/AddEditForm";
import Jumbotron from "./components/Jumbotron";
//import londonRestaurantData from "./data/london_restaurants.json";
import Footer from "./components/Footer.jsx";
import MapComp from "./components/MapComp.jsx";
import { styled } from "@mui/material/styles";
import RateReviewIcon from '@mui/icons-material/RateReview';
import RenderReviewCard from "./components/RenderReviewCard.jsx";

import Form from "./components/Form.jsx"
//import cafes from "./data/london_cafes_reduced.json";
import axios from "axios";
import Button from "@mui/material/Button";


function App() {
  const [restaurantData, setRestaurantData] = useState([]);
  // const [reviews, setReview] = useState([])


  useEffect( () => {
    //make GET api call here
    axios.get('src/data/london_restaurants.json')
    .then(res => {
      console.log(res.data)
      setRestaurantData(res.data)
    })
    .catch(err => console.error(err));
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


      <ReviewForm />

{/*
      <AddReviewButton variant='contained' >
                      <RateReviewIcon className="navbar-icon"/> 
                      ADD REVIEW</AddReviewButton>

                      

      <Form />
        */}

      <Footer />
    </>
  );
}

export default App;
