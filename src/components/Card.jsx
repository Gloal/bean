// importing components and modules 
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import coffeeShopsData from "../data/london_restaurants.json";
import { IonIcon } from "@ionic/react";
import {
  cafeOutline,
  wifiOutline,
  womanOutline,
  manOutline,
  starSharp,
} from "ionicons/icons";

// object mapping coffee shop 
const cafeLogos = {
  "The Ness Cafe": [
    { icon: cafeOutline },
    { icon: wifiOutline },
    { icon: womanOutline },
    { icon: manOutline },
  ],
  "Giddy Up Coffee": [{ icon: cafeOutline }],
  "Costa Coffee": [
    { icon: cafeOutline },
    { icon: wifiOutline },
    { icon: womanOutline },
    { icon: manOutline },
  ],
  "Black Sheep Coffee": [
    { icon: cafeOutline },
    { icon: wifiOutline },
    { icon: womanOutline },
    { icon: manOutline },
  ],
  "L'express Coffee": [{ icon: cafeOutline }],
  "Soho Coffee Co.": [
    { icon: cafeOutline },
    { icon: womanOutline },
    { icon: manOutline },
  ],
  "Copper Coffee": [
    { icon: cafeOutline },
    { icon: womanOutline },
    { icon: manOutline },
  ],
  "Coffee Break": [{ icon: cafeOutline }, { icon: wifiOutline }],
  "Carter Lane Coffee House": [{ icon: cafeOutline }, { icon: wifiOutline }],
  "Coffee Station": [{ icon: cafeOutline }, { icon: wifiOutline }],
  "XOXO Patisserie": [{ icon: cafeOutline }],
  "The Tea and Coffee Plant": [{ icon: cafeOutline }],
};

// rendering star rating 
const renderStars = (rating) => {
  const stars = [];
  const filledStars = Math.floor(rating);

  for (let i = 0; i < filledStars; i++) {
    stars.push(<IonIcon key={i} icon={starSharp} />);
  }

  return stars;
};


// react component for displaying coffee shop details 
export default function CoffeeCard({ shopId }) {
  const shopData = coffeeShopsData.find((shop) => shop._id === shopId);

  if (!shopData) {
    return null;
  } // if data not found return null 


  // strucutre of shop data
  const {
    BusinessName,
    RatingValue,
    AddressLine1,
    AddressLine2,
    AddressLine3,
    PostCode,
    imageUrl,
    Review,
    Website,
  } = shopData;

  // get icons from library 
  const icons = cafeLogos[BusinessName] || [];
  const iconElements = icons.map((item, index) => (
    <IonIcon key={index} icon={item.icon} />
  ));

// rendering for business name link to website 
  const businessNameComponent = Website ? (
    <a href={Website} target="_blank" rel="noopener noreferrer">
      {BusinessName}
    </a>
  ) : (
    <span>{BusinessName}</span>
  );

  // return jsx for coffee card component 
  return (
    <div className="coffee-card" id="trending">
      <Card sx={{ maxWidth: 345 }}>
        <div className="image-container">
          <img src={imageUrl} alt={BusinessName} />
        </div>
        <CardContent className="card-content">
          <Typography gutterBottom variant="h5" component="div">
            {businessNameComponent}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span style={{ fontWeight: "bold" }}>Rating:</span>{" "}
            {RatingValue ? renderStars(RatingValue) : "N/A"}
          </Typography>
          <div className="icon-container">{iconElements}</div>
          <Typography variant="body2" color="text.secondary">
            <span style={{ fontWeight: "bold" }}>Address</span> {AddressLine1}{" "}
            {AddressLine2}, {AddressLine3} {PostCode}
          </Typography>
          {shopData.Reviews && shopData.Reviews.map((review, index) => (
    <Typography key={index} variant="body2" color="text.secondary">
      <span style={{ fontWeight: 'bold' }}>Review {review.reviewer}:</span> {review.review}
    </Typography>
  ))}
        </CardContent>
      </Card>
    </div>
  );
}
