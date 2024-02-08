import React from 'react';
import coffeeImage from "./../assets/Images/coffee-jumbotron-img.jpg";
import './Jumbotron.css';

const Jumbotron = () => {
 return (
  <div className="jumbotron">
   <img src={coffeeImage} alt="Coffee Shop" className="jumbotron-image" />
   <div className="overlay-text">
   <h1 className="display-4" >Your Guide to Coffee Culture!</h1>
   <p className="lead">Discover the best coffee shops in town.</p>
   <button className="btn btn-primary btn-lg" href="#" role="button">Let's Go</button>
   </div>
  </div>
 );
};

export default Jumbotron;