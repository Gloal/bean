import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'; 
import coffeeShopsData from '../data/london_restaurants.json'; 
// import { IonIcon } from '@ionic/react';
// import {fastFood, wine, }

export default function CoffeeCard({ shopId}) {
  const shopData = coffeeShopsData.find(shop => shop._id === shopId);
 
  if (!shopData) {
    return null; 
  }

  const { BusinessName, RatingValue, AddressLine1, AddressLine2, AddressLine3, PostCode, imageUrl } = shopData;

  return (
    <div className='coffee-card'>
      <Card sx={{ maxWidth: 345 }}>
        <div className="image-container">
        <img src={imageUrl} alt= {BusinessName} />
        </div>
        <CardContent className='card-content'>
          <Typography gutterBottom variant="h5" component="div">
            {BusinessName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rating: {RatingValue || 'N/A'} / 5
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Address: {AddressLine1} {AddressLine2}, {AddressLine3} {PostCode}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}