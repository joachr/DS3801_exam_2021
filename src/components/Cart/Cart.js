import React from 'react';
import { useCart } from "react-use-cart";
import {Typography} from "@material-ui/core";
import Button from "@mui/material/Button";


const Cart = () => {
	const {
		isEmpty,
		totalUniqueItems,
		items,
		totalItems,
		cartTotal,
		updateItemQuantity,
		removeItem,
		emptyCart,
	} = useCart();

	if (isEmpty) return <Typography variant={"h5"}>Handlekurven er tom</Typography>

	return (

		<section>
			<div>
				<div>
					<Typography variant={"h5"}>Handlekurv ({totalUniqueItems}) Totalt produkter ({totalItems})</Typography>
					<table>
						<tbody>
							{items.map((item, index) => {
								return(
									<tr key={index}>
										<td>
											<img src={item.img} style={{height: "6rem"}}/>
										</td>
										<td>{item.title}</td>
										<td>Pris: kr.{item.price},-</td>
										<td>
											<Button variant={"outlined"} onClick={() => updateItemQuantity(item.id, item.quantity -1)} style={{
												color: 'black',
												borderColor: "black",
												padding: "2px",
												margin: "3px",
											}}>-</Button>
											<span style={{
												fontWeight: "bold",
												fontSize: "20px",
											}}>{item.quantity}</span>
											<Button variant={"outlined"} onClick={() => updateItemQuantity(item.id, item.quantity +1)} style={{
												color: 'black',
												borderColor: "black",
												padding: "2px",
												margin: "3px",
											}}>+</Button>
											<Button onClick={() => removeItem(item.id)} style={{
												color: 'white',
												backgroundColor: '#d36161',
											}}>Fjern vare</Button>
										</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				</div>
				<div>
					<Typography>Total pris: kr.{cartTotal},-</Typography>
				</div>
				<div>
					<Button onClick={() => emptyCart()} style={{
						color: 'white',
						backgroundColor: '#009688',
					}}>Tøm handlevognen</Button>
				</div>
			</div>
		</section>

			/*<ModalCart/>*/
	);
};

export default Cart;
