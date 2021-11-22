import React, {useState} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import pizzaImage from '../components/assets/images/pizzas/cadonation.jpg'
import {makeStyles} from '@material-ui/styles';
import {CardActions, CardContent, CardMedia, Divider} from '@material-ui/core';
import ShopIcon from '@mui/icons-material/Shop';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Cart from "./Cart/Cart.js";
import {Link} from "react-router-dom";
import { useCart } from "react-use-cart";

const style = {
    position: 'relative',
    borderRadius: '12px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 710,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};


function ModalCart({open, onClose, totalUniItems}) {

    return (
        <div>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Cart />
                    <Button component={Link} to="/checkOut" style={{
                        color: 'white',
                        backgroundColor: '#009688',
                        position: 'relative', top: '20px', left: '10rem'
                    }} variant="outlined" endIcon={<ShopIcon />} size={"large"}>
                        Checkout
                    </Button>

                    <Button component={Link} to="/pizza" style={{
                        color: 'white',
                        backgroundColor: '#009688',
                        position: 'relative', top: '20px', left: '15rem'
                    }} variant="outlined" endIcon={<AddShoppingCartIcon />} size={"large"}>
                        Fortsett å handle
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}


export default ModalCart;