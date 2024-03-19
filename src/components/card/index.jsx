import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CustomButton from '../custom-button';
import './card.css'
import { useDispatch, useSelector } from 'react-redux';
import { CartDisplay } from '../../redux/action/cart_action';
import { addItem } from '../../redux/action/addItem_action';

export const CardComp = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.user.cart)
  const exists = cart.findIndex(cartItem => cartItem.id === item.id)

  const handleClick = () => {
    if (exists !== -1) {
      dispatch(addItem(item.id))
    } else {
      dispatch(CartDisplay(item))
    }
    console.log("hi", item)
  }

  return (
    <Card sx={{ minWidth: 280, margin: 3, marginTop: 10 }} className="card">
      <CardActionArea>
        <div className='image-container'>
          <CardMedia
            component="img"
            height="250"
            width="250"
            image={item.imageUrl}
            alt={item.name}
          />
          <div className="textblock">
            <CustomButton variant="outline" onClick={handleClick}>ADD TO CART</CustomButton>
          </div>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: ${item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
