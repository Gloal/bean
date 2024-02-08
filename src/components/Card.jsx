import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';


export default function CoffeeCard({ shopData }) {
  if (!shopData) {
    return null; 
  }

  const { BusinessName, RatingValue, AddressLine2, AddressLine3 } = shopData;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image=""
        alt="" />
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