import React from 'react';
import {useCart} from "react-use-cart";
import {Typography} from "@material-ui/core";
import Button from "@mui/material/Button";
import {makeStyles} from "@material-ui/styles";
import Divider from "@material-ui/core/Divider";


const useStyleCart = makeStyles(() => ({
	textCartContainer: {

		display: "flex",
		width: "100%",
		textAlign: "right",
		bottom: "4rem",
		left: "12rem",
	}
}));

const useStyleTableRow = makeStyles(() => ({
	tableRowContainer: {
		padding: "15px",
		margin: "10px",
		height: "8rem",
		width: "100%",
		marginBottom: "50px"
	}
}));

const useStyleTitle = makeStyles(() => ({
	titleStyling: {
		position: "relative",
		left: "10rem",
		bottom: "80px",
	}
}));

const useStyleButton = makeStyles(() => ({
	buttonStyling: {
		position: "relative",
		display: "flex",
		left: "0",
		bottom: "",
	}
}));

const useStyleTotalPrice = makeStyles(() => ({
	totalPriceStyling: {
		position: "relative",
		marginBottom: "10px",
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

const MobileCart = () => {

	const {textCartContainer} = useStyleCart();
	const {tableRowContainer} = useStyleTableRow();
	const {titleStyling} = useStyleTitle();
	const {totalPriceStyling} = useStyleTotalPrice();
	const {dividerStyling} = useStyleDivider();
	const {buttonStyling} = useStyleButton();

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
								return (
									<div className={tableRowContainer} key={index}>
										<div>
											<img src={item.img} style={{height: "7rem"}} alt={"image of pizza"}/>
										</div>
										<div className={titleStyling}>
											<Typography variant={"h5"} component={"div"}>{item.title}</Typography>
										</div>
										<div className={textCartContainer}>
											<Typography
												style={{fontSize: "20px", left: "20", marginRight: "5px"}}>Pris: {item.price},-</Typography>
											<div>
												<div className={buttonStyling}>
													<Button variant={"outlined"} onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
													        style={{
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
													<Button variant={"outlined"} onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
													        style={{
														        color: 'black',
														        padding: "2px",
														        margin: "3px",
													        }}>+</Button>
													<Button onClick={() => removeItem(item.id)} style={{
														color: 'white',
														backgroundColor: '#d36161',
														left: "2rem",
													}}>Fjern vare</Button>
												</div>

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
					<Typography style={{fontSize: "20px"}}>Totalsum: <b>{cartTotal}</b> kr (evt. frakt kalkuleres i
					                                       kassen)</Typography>
				</div>
				<div style={{display: "flex", justifyContent: "center", position: "relative"}}>
					<Button size={"small"} onClick={() => emptyCart()} style={{
						color: 'white',
						backgroundColor: '#d36161',
						padding: "8px"
					}}>Tøm handlevognen</Button>
				</div>
			</div>
		</section>
	);
};

export default MobileCart;
