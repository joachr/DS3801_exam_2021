import React, {useState} from "react";
import {makeStyles} from '@material-ui/styles';
import {Button, CardActions, CardContent, CardMedia, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import Card from "@mui/material/Card";
import {useCart} from "react-use-cart";

const useStyleCardItem = makeStyles(() => ({
	cardItem: {
		position: "relative",
		display: "flex",
		flex: "1 1 auto",
	},
}));

const useStyleText = makeStyles(() => ({
	textElements: {
		position: "absolute",
		top: "1rem",
		left: "10rem",
	}
}));

const useStylesButtons = makeStyles(() => ({
	buttonElements: {
		position: "absolute",
		textAlign: "right",
		height: "50%",
		width: "100%",
		top: "70%",
		left: "30%",
	},
}));

const useStylePrice = makeStyles(() => ({
	priceElement: {
		position: "absolute",
		bottom: "5rem",
		left: "10rem",
	}
}));

const useStyleCard = makeStyles(() => ({
	cardElement: {
		padding: "0.4rem",
		margin: "0.4rem",
		width: "100%",
	}
}));


const MenuItemCardMobile = (props) => {
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

				<Card className={cardElement} sx={{minWidth: 330}}>
					<CardMedia image={props.img}
					           alt="food item"
					           component="img"
					           height="120"
					           style={{maxWidth: "7.3rem", margin: "1rem"}}/>
					<div className={textElements}>
						<CardContent sx={{margin: "0px",
							padding: "0px",
							display: "flex",
							flexWrap: "wrap",
						}}>
							<div>
								<Typography variant="h5" component="div">
									{props.title}
								</Typography>
								<Typography variant={"body2"}>
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
							<Button size={"small"} onClick={() => {
								addItem(props, quantity)
							}} id={"add-to-card-button"} style={{
								backgroundColor: '#006357',
								color: 'white',
								margin: '0.2em',
								width: "20%",
							}}>Legg til</Button>
						</CardActions>
					</div>
				</Card>
		</div>
	);
}


export default MenuItemCardMobile;