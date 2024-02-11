import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import coffeeShopsData from '../data/london_restaurants.json';
import { IonIcon } from '@ionic/react';
import { cafeOutline, wifiOutline, womanOutline, manOutline, starSharp } from 'ionicons/icons';

const cafeLogos = {
  "The Ness Cafe": [{ icon: cafeOutline }, { icon: wifiOutline }, { icon: womanOutline }, { icon: manOutline }],
  "Giddy Up Coffee": [{ icon: cafeOutline }],
  "Costa Coffee": [{ icon: cafeOutline }, { icon: wifiOutline }],
  "Black Sheep Coffee": [{ icon: cafeOutline }, { icon: wifiOutline }],
  "L'express Coffee": [{ icon: cafeOutline }],
  "Soho Coffee Co.": [{ icon: cafeOutline }],
  "Copper Coffee": [{ icon: cafeOutline }],
  "Coffee Break": [{ icon: cafeOutline }],
  "Carter Lane Coffee House": [{ icon: cafeOutline }],
  "Coffee Station": [{ icon: cafeOutline }],
  "XOXO Patisserie": [{ icon: cafeOutline }],
  "The Tea and Coffee Plant": [{ icon: cafeOutline }]
};

// add functionality to render stars instead of star rating 4/5 

const renderStars = (rating) => {
  const stars = [];
  const filledStars = Math.floor(rating); 

  for(let i = 0; i < filledStars; i++) {
    stars.push(<IonIcon key={i} icon={starSharp} />);
  }

  return stars;
}

export default function CoffeeCard({ shopId }) {
  const shopData = coffeeShopsData.find(shop => shop._id === shopId);

  if (!shopData) {
    return null;
  }

  const { BusinessName, RatingValue, AddressLine1, AddressLine2, AddressLine3, PostCode, imageUrl, Review } = shopData;

  const icons = cafeLogos[BusinessName] || [];
  const iconElements = icons.map((item, index) => (
    <IonIcon key={index} icon={item.icon} />
  ));

  return (
    <div className="coffee-card">
      <Card sx={{ maxWidth: 345 }}>
        <div className="image-container">
          <img src={imageUrl} alt={BusinessName} />
        </div>
        <CardContent className="card-content">
          <Typography gutterBottom variant="h5" component="div">
            {BusinessName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span style={{ fontWeight: 'bold' }}>Rating:</span> {RatingValue ? renderStars(RatingValue) : 'N/A'} 
          </Typography>
          <div className="icon-container">
            {iconElements}
          </div>
          <Typography variant="body2" color="text.secondary">
            <span style={{ fontWeight: 'bold' }}>Address</span> {AddressLine1} {AddressLine2}, {AddressLine3} {PostCode}
          </Typography>
          {Review && (
            <Typography variant="body2" color="text.secondary">
              <span style={{ fontWeight: 'bold' }}>Review:</span> {Review}
            </Typography>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
