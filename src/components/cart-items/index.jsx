import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import CustomButton from '../custom-button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import ShoppingBagSvg from '../../asserts/images/shopping-bag.svg';
import { useDispatch, useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import { ItemContent, ItemDetails, ItemImage, Item, ItemButton } from './itemcontent';
import StripeCheckout from 'react-stripe-checkout';
import { addItem } from '../../redux/action/addItem_action';
import { removeItem } from '../../redux/action/remove_item';

export default function MenuListComposition() {
    const cart = useSelector(state => state.user.cart);
    const [open, setOpen] = useState(false);
    const itemsList = Array.isArray(cart) ? cart : [];
    const anchorRef = useRef(null);
    const dispatch = useDispatch();

    const itemsCount = Array.isArray(cart) ? cart.length : 0;
    const totalPrice = itemsList.reduce((total, item) => total + (item.quantity * item.price), 0);

    const handleClick = (id) => {
        dispatch(addItem(id))
    }


    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRemove = (id) => {
        dispatch(removeItem(id))
    }

    return (
        <Stack direction="row" spacing={2}>
            <div>
                <Button
                    ref={anchorRef}
                    id="composition-button"
                    onClick={handleToggle}
                >
                    <Badge badgeContent={itemsCount} color="primary">
                        <img src={ShoppingBagSvg} alt="Shopping Bag" style={{ height: '26px' }} />
                    </Badge>
                </Button>
                <Popper
                    open={open}
                    role={undefined}
                    placement="bottom-end"
                    anchorEl={anchorRef.current}
                    style={{ zIndex: 9999 }}
                    transition
                    disablePortal
                >
                    {({ TransitionProps }) => (
                        <Grow
                            {...TransitionProps}
        
                        >
                            <Item>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        autoFocus={open}
                                        id="composition-menu"
                                        onKeyDown={handleClose}
                                    >
                                        {itemsList.map(item => (
                                            <MenuItem key={item.name}>
                                                <ItemContent>
                                                    <ItemDetails>
                                                        <ItemImage src={item.imageUrl} alt={item.name} />
                                                        <div>
                                                            <div>{item.name}</div>
                                                            <div>{item.quantity} - ${item.quantity * item.price}

                                                            </div>

                                                        </div>
                                                    </ItemDetails>
                                                </ItemContent>
                                                <ItemButton >
                                                    <CustomButton onClick={() => handleClick(item.id)} >
                                                        +
                                                    </CustomButton>

                                                    <CustomButton onClick={() => handleRemove(item.id)}>
                                                        -
                                                    </CustomButton>
                                                </ItemButton>
                                            </MenuItem>
                                        ))}
                                        <div> Total price: ${totalPrice} </div>
                                        <StripeCheckout
                                            stripeKey="pk_test_51OuU9HSIQn1Rj4gFXRAvXr0V9YpZaFZptPbFMerQrEzVZvWhFi5Ky1frK0q8pEGXC3iHUvJgajf3v1k1pHeBJyvN00h1rBHlMm">
                                            <CustomButton variant="contained" style={{ backgroundColor: 'black', marginTop: '5px' }} >

                                                GO TO CHECKOUT</CustomButton>
                                        </StripeCheckout>
                                    </MenuList>
                                </ClickAwayListener>
                            </Item>
                        </Grow>
                    )}
                </Popper>
            </div>
        </Stack>
    );
}
