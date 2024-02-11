import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'; 
import coffeeShopsData from '../data/london_restaurants.json'; 
import { IonIcon } from '@ionic/react';
import { wifiOutline, cafeOutline, wineOutline } from 'ionicons/icons';

const cafeLogos = {
  "The Ness Cafe": cafeOutline, 
  "Big Coffee": cafeOutline, 
  "Costa Coffee": cafeOutline, 
  "Black Sheep Coffee": cafeOutline, 
  "L'express Coffee": cafeOutline, 
  "Soho Coffee Co.": cafeOutline, 
  "Kasima Coffee": cafeOutline, 
  "Coffee Break": cafeOutline, 
  "The Coffee Spot": cafeOutline, 
  "Coffee Station": cafeOutline, 
  "XOXO Patisserie": cafeOutline, 
  "The Tea and Coffee Plant": cafeOutline 
};

export default function CoffeeCard({ shopId }) {
  const shopData = coffeeShopsData.find(shop => shop._id === shopId);
 
  if (!shopData) {
    return null; 
  }

  const { BusinessName, RatingValue, AddressLine1, AddressLine2, AddressLine3, PostCode, imageUrl, Wifi, Wine } = shopData;

  const wifiIcon = Wifi ? wifiOutline : null; 
  const wineIcon = Wine ? wineOutline : null; 

  const logoIcon = cafeLogos[BusinessName] || cafeOutline;

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
            Rating: {RatingValue || 'N/A'} / 5
          </Typography>
          <div className="icon-container"> 
            {logoIcon && <IonIcon icon={logoIcon} />}
            {wifiIcon && <IonIcon icon={wifiIcon} />}
            {wineIcon && <IonIcon icon={wineIcon} />}
          </div>
          <Typography variant="body2" color="text.secondary">
            Address: {AddressLine1} {AddressLine2}, {AddressLine3} {PostCode}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
