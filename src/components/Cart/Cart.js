import React from 'react';
import {useCart} from "react-use-cart";

import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const Cart = () => {

	const {
		isEmpty,
		totalUniqueItems,
		totalItems,
		cartTotal,
		updateItemQuantity,
		removeItem,
		emptyCart,
		items
	} = useCart();

	/*if (isEmpty) return <h1>Your cart is empty</h1>*/

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
{/*		<Button onClick={handleOpen}>Open modal</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Text in a modal
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
					</Typography>
				</Box>
			</Modal>*/}
		</>
	);
};

export default Cart;

