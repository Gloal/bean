import React from 'react';
import coffeeImage from "./../assets/Images/coffee-jumbotron-img.jpg";

const Jumbotron = () => {
 return (
  <div className="jumbotron">
   <img src={coffeeImage} alt="Coffee Shop" className="jumbotron-image" />
   <div className="overlay-text">
   <h2 className="display-4" >Welcome to Coffee Shop Reviews!</h2>
   <p className="lead">Discover the best coffee shops in town.</p>
   <button className="btn btn-primary btn-lg" href="#" role="button">Let's Go</button>
   </div>
  </div>
 );
};

export default Jumbotron;