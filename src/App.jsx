import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { styled } from "@mui/material/styles";
import RateReviewIcon from '@mui/icons-material/RateReview';
import axios from "axios";
import Button from "@mui/material/Button";

import RenderReviewCard from "./components/RenderReviewCard.jsx";
import Form from "./components/Form.jsx"
import Card from "./components/Card.jsx";
import NavBar from "./components/NavBar.jsx";
import ReviewForm from "./components/AddEditForm.jsx";
import Jumbotron from "./components/Jumbotron.jsx";
import Footer from "./components/Footer.jsx";
import MapComp from "./components/MapComp.jsx";
import data from "./data/london_restaurants.json"

function App() {
  const [restaurantData, setRestaurantData] = useState([data]);
  // const [reviews, setReview] = useState([])

  
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
