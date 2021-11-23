import React from 'react';
import {useCart} from "react-use-cart";
import {Divider, Typography} from "@material-ui/core";

function CartForCheckout() {
	const {
		isEmpty,
		items,
		cartTotal,
	} = useCart();

	if (isEmpty) return <Typography variant={"h5"}>Handlekurven er tom</Typography>

	return (
		<section>
			<div>
				<div>
					<Typography variant={"h5"}>Handlekurv</Typography>
					<table>
						<tbody>
						{items.map((item, index) => {
							return (
								<tr key={index}>
									<td>{item.title} kr. {item.price},- {item.quantity}stk</td>
								</tr>
							)
						})}
						</tbody>
					</table>
				</div>
				<div>
					<Divider variant="middle"/>
					<Typography>Total pris: kr. {cartTotal},-</Typography>
				</div>
			</div>
		</section>
	);
}

export default CartForCheckout