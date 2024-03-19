import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import fashionImage from '../../asserts/images/fashion.jpg';

export default function ContactCard() {
  return (
    <div>
      <h1 style={{ marginTop: '50px', justifyContent: 'center', WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: 'black', textAlign: 'center' }}>CONTACT US</h1>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '150px' }}>
        <Card sx={{ display: 'flex', justifyContent: 'content', alignContent: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                CROWN'S CLOTHING
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                crowns@example.com
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                +1234567890
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                1234 Street Name, City, Country
              </Typography>
            </CardContent>
            <Box sx={{  pl: 1, pb: 1 }}>
              <IconButton aria-label="location">
                <LocationOnIcon />
              </IconButton>
              <IconButton aria-label="email">
                <EmailIcon />
              </IconButton>
              <IconButton aria-label="phone">
                <PhoneIcon />
              </IconButton>
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={fashionImage}
            alt="Clothing"
          />
        </Card>
      </Box>
    </div>
  );
}
