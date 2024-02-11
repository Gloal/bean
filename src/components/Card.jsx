import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import coffeeShopsData from '../data/london_restaurants.json';
import { IonIcon } from '@ionic/react';
import { wifiOutline, cafeOutline, wineOutline } from 'ionicons/icons';

const cafeLogos = {
  "The Ness Cafe": { cafe: cafeOutline, wifi: wifiOutline },
  "Giddy Up Coffee": { cafe: cafeOutline },
  "Costa Coffee": { cafe: cafeOutline, wifi: wifiOutline },
  "Black Sheep Coffee": { cafe: cafeOutline, wifi: wifiOutline },
  "L'express Coffee": { cafe: cafeOutline },
  "Soho Coffee Co.": { cafe: cafeOutline },
  "Copper Coffee": { cafe: cafeOutline },
  "Coffee Break": { cafe: cafeOutline },
  "Carter Lane Coffee House": { cafe: cafeOutline },
  "Coffee Station": { cafe: cafeOutline },
  "XOXO Patisserie": { cafe: cafeOutline },
  "The Tea and Coffee Plant": { cafe: cafeOutline }
};

export default function CoffeeCard({ shopId }) {
  const shopData = coffeeShopsData.find(shop => shop._id === shopId);

  if (!shopData) {
    return null;
  }

  const { BusinessName, RatingValue, AddressLine1, AddressLine2, AddressLine3, PostCode, imageUrl, Wifi, Wine, Review } = shopData;
  
  const cafeIcon = cafeLogos[BusinessName]?.cafe || cafeOutline; 
  const wifiIcon = Wifi ? wifiOutline : null;
  const wineIcon = cafeLogos[BusinessName]?.wine || null; 

  const logoIcon = cafeLogos[BusinessName]?.wifi || cafeLogos[BusinessName]?.cafe || cafeOutline;

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
            <span style={{ fontWeight: 'bold' }}>Rating:</span> {RatingValue || 'N/A'} / 5
          </Typography>
          <div className="icon-container">
            {logoIcon && <IonIcon icon={logoIcon} />}
            {wifiIcon && <IonIcon icon={wifiIcon} />}
            {wineIcon && <IonIcon icon={wineIcon} />}
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
