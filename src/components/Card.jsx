import * as React from 'react';
import Card  from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CoffeeCard({ shopData }) {
  if (!shopData) {
    return null; 
  }

  const { BusinessName, RatingValue, AddressLine2, AddressLine3 } = shopData;

  return (
    <Card sx={{ maxWidth: 345 }}>
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
  );
} 