import React, {useState} from "react";
import {makeStyles} from '@material-ui/styles';
import {Button, CardActions, CardContent, CardMedia, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import Card from "@mui/material/Card";
import {useCart} from "react-use-cart";

const useStyleCardItem = makeStyles(() => ({
	cardItem: {
		position: "relative",
		display: "flex",
		flex: "1 1 30%",
		marginBottom: "2rem",
	},
}));

const useStyleText = makeStyles(() => ({
	textElements: {
		position: "absolute",
		textAlign: "right",
		height: "50%",
		width: "45%",
		left: "50%",
	}
}));

const useStylesButtons = makeStyles(() => ({
	buttonElements: {
		position: "absolute",
		textAlign: "right",
		height: "50%",
		width: "50%",
		top: "70%",
		left: "45%",
	},
}));

const useStylePrice = makeStyles(() => ({
	priceElement: {
		position: "absolute",
		bottom: "9rem",
		left: "70%",
	}
}));

const useStyleCard = makeStyles(() => ({
	cardElement: {
		display: "flex",
		position: "relative",
		padding: "1rem",
		margin: "1rem",
		width: "100%",
	}
}));


const MenuItemCardDesktop = (props) => {
	const {addItem} = useCart();

	const {cardItem} = useStyleCardItem();
	const {buttonElements} = useStylesButtons();
	const {textElements} = useStyleText();
	const {priceElement} = useStylePrice();
	const {cardElement} = useStyleCard();
	const [quantity, setQuantity] = useState(1);

	const incrementCounter = () => {
		setQuantity(quantity + 1);
	};
	const decrementCounter = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	return (

		<div className={cardItem}>
			<Card className={cardElement} sx={{minWidth: 420, maxWidth: 580}}>
					<CardMedia image={props.img} alt="food item" component="img" height="255"
					           style={{maxWidth: "16rem", margin: "1rem"}}/>
					<div className={textElements}>
						<CardContent>
							<div>
								<Typography variant="h4" component="div">
									{props.title}
								</Typography>
							</div>
							<div>
								<Typography>
									{props.ingredients}
								</Typography>
							</div>
						</CardContent>
					</div>
					<div className={buttonElements}>
						<div className={priceElement}>
							<Typography style={{fontWeight: "bold", fontSize: "27px"}}>
								{props.price},-
							</Typography>
						</div>
						<CardActions>
							<Button onClick={decrementCounter} size={"small"} variant={"outlined"}>-</Button>
							<span style={{
								width: "2rem",
								display: "flex",
								justifyContent: "center",
								fontWeight: "bold",
								fontSize: "20px",
							}}>{quantity}</span>
							<Button size={"small"} variant={"outlined"} onClick={incrementCounter}>+</Button>
							<Button onClick={() => {
								addItem(props, quantity)
							}} id={"add-to-card-button"} style={{
								backgroundColor: '#006357',
								color: 'white',
								margin: '1em',
								width: "30%",
							}}>Legg til</Button>
						</CardActions>
					</div>
				</Card>
		</div>
	);
}


export default MenuItemCardDesktop;