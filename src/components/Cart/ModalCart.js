import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ShopIcon from '@mui/icons-material/Shop';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Cart from "./Cart.js";
import MobileCart from "./MobileCart.js";
import {Link} from "react-router-dom";
import {useMediaQuery, useTheme} from "@material-ui/core";

const style = {
	position: 'relative',
	borderRadius: '12px',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	maxWidth: 710,
	
	bgcolor: 'background.paper',
	border: '1px solid #000',
	boxShadow: 24,
	p: 4
};


function ModalCart({open, onClose}) {

	
	const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<div>
			{isMatch ? <Modal style={{overflow: "scroll"}} open={open} onClose={onClose} aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description">
				<Box sx={style}>
					<MobileCart/>

					<div style={{justifyContent: "space-between", display: "flex"}}>	
					<Button onClick={onClose} component={Link} to="/pizza" style={{
						color: 'black',
						backgroundColor: '#FFD148',
						position: 'relative', top: '20px',
					}} variant="outlined" endIcon={<AddShoppingCartIcon/>} size={"medium"}>
						Fortsett å surfe
					</Button>

					<Button onClick={onClose} component={Link} to="/checkOut" style={{
						color: 'white',
						backgroundColor: '#006357',
						position: 'relative', top: '20px',
					}} variant="outlined" endIcon={<ShopIcon/>} size={"large"}>
						Til Betaling
					</Button>
					</div>
				</Box>
			</Modal>: (
					<Modal style={{overflow: "scroll"}} open={open} onClose={onClose} aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description">
				<Box sx={style}>
					<Cart/>

					<div style={{justifyContent: "space-between", display: "flex"}}>
					<Button onClick={onClose} component={Link} to="/pizza" style={{
						color: 'black',
						backgroundColor: '#FFD148',
						position: 'relative', top: '20px'
					}} variant="outlined" endIcon={<AddShoppingCartIcon/>} size={"large"}>
						Fortsett å handle
					</Button>

					<Button onClick={onClose} component={Link} to="/checkOut" style={{
						color: 'white',
						backgroundColor: '#006357',
						position: 'relative', top: '20px'
					}} variant="outlined" endIcon={<ShopIcon/>} size={"large"}>
						Gå til betaling
					</Button>
					</div>
				</Box>
			</Modal>
			)}
				
		</div>
	);
}


export default ModalCart;