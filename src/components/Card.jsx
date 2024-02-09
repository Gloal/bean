import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import BlackSheepCoffee from '../assets/Images/black-sheep-coffee.jpg'; 
import { getImageUrl } from '../utils/utils';

export default function CoffeeCard({ shopData }) {
  if (!shopData) {
    return null;
  }

  const { BusinessName, RatingValue, AddressLine2, AddressLine3, _id } = shopData;
  const imageUrl = getImageUrl(_id); 

  return (
    <div className='coffee-card'>
      <Card sx={{ maxWidth: 345 }}>
        <div className="image-container">
          <img src={imageUrl} alt={BusinessName} />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {BusinessName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rating: {RatingValue || 'N/A'} / 5
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Address: {AddressLine2}, {AddressLine3}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}