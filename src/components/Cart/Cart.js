import React from 'react';
import { useCart } from "react-use-cart";
import {Typography} from "@material-ui/core";
import Button from "@mui/material/Button";
import {makeStyles} from "@material-ui/styles";
import Divider from "@material-ui/core/Divider";


const useStyleCart = makeStyles(() => ({
	textCartContainer: {
		position: "relative",
		display: "flex",
		width: "100%",
		textAlign: "right",
		bottom: "4rem",
		left: "14rem",
	}
}));

const useStyleTableRow = makeStyles(() => ({
	tableRowContainer: {
		padding: "15px",
		margin: "10px",
		height: "8rem",
		width: "100%",
	}
}));

const useStyleTitle = makeStyles(() => ({
	titleStyling: {
		position: "relative",
		left: "14rem",
		bottom: "100px",
	}
}));

const useStyleTotalPrice = makeStyles(() => ( {
	totalPriceStyling: {
		position: "relative",
		left: "9rem",
	}
}));

const useStyleDivider = makeStyles(() => ({
	dividerStyling: {
		position: "absolute",
		width: "100%",
		height: "10px",
		right: "15rem",
	}
}));

const Cart = () => {

	const { textCartContainer } = useStyleCart();
	const { tableRowContainer } = useStyleTableRow();
	const { titleStyling } = useStyleTitle();
	const { totalPriceStyling } = useStyleTotalPrice();
	const { dividerStyling } = useStyleDivider();

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
					<Typography variant={"h6"}>Handlekurv ({totalUniqueItems}) Totalt produkter ({totalItems})</Typography>
					<div>
						<div>
							{items.map((item, index) => {
								return(
									<div className={tableRowContainer} key={index}>
										<div>
											<img src={item.img} style={{height: "7rem"}}/>
										</div>
										<div className={titleStyling}>
											<Typography variant={"h5"} component={"div"}>{item.title}</Typography>
										</div>
											<div className={textCartContainer}>
												<Typography style={{fontSize: "20px"}}>Pris: {item.price},-</Typography>
												<div>
													<Button variant={"outlined"} onClick={() => updateItemQuantity(item.id, item.quantity -1)} style={{
														color: 'black',
														padding: "2px",
														margin: "3px",
													}}>-</Button>
													<div style={{width: "50px", display: "inline-block"}}>
														<span style={{
															fontWeight: "bold",
															position: "relative",
															fontSize: "20px",
															right: "19px"
														}}>{item.quantity}</span>
													</div>
													<Button variant={"outlined"} onClick={() => updateItemQuantity(item.id, item.quantity +1)} style={{
														color: 'black',
														padding: "2px",
														margin: "3px",
													}}>+</Button>
													<Button onClick={() => removeItem(item.id)} style={{
														color: 'white',
														backgroundColor: '#d36161',
														left: "2rem",
													}}>Fjern vare</Button>
													<Divider className={dividerStyling}/>
												</div>
											</div>
									</div>
								)
							})}
						</div>
					</div>
				</div>
				<div className={totalPriceStyling}>
					<Typography style={{fontSize: "20px"}}>Totalsum: <b>{cartTotal}</b> kr (evt. frakt kalkuleres i kassen)</Typography>
				</div>
				<div>
					<Button size={"small"} onClick={() => emptyCart()} style={{
						color: 'white',
						backgroundColor: '#006357',
					}}>Tøm handlevognen</Button>
				</div>
			</div>
		</section>

			/*<ModalCart/>*/
	);
};

export default Cart;

export class totalUniqueItems {
}