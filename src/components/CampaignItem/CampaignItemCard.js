import React, {useState} from "react";
import {makeStyles} from '@material-ui/styles';
import {Button, CardActions, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import Card from "@mui/material/Card";
import {useCart} from "react-use-cart";

const useStyleCardItem = makeStyles(() => ({
	cardItem: {
		position: "relative",
		display: "flex",
		justifyContent: "center",
		flex: "auto",
		marginBottom: "25rem",
	},
}));

const useStyleText = makeStyles(() => ({
	textElements: {
		position: "absolute",
		top: "20px",
		textAlign: "right",
		width: "50%",
		left: "45%",
	}
}));

const useStylesButtons = makeStyles(() => ({
	buttonElements: {
		position: "absolute",
		textAlign: "right",
		height: "50%",
		width: "50%",
		top: "70%",
		left: "54%",
	},
}));

const useStylePrice = makeStyles(() => ({
	priceElement: {
		position: "absolute",
		bottom: "11rem",
		left: "50%",
	}
}));

const useStyleCard = makeStyles(() => ({
	cardElement: {
		display: "flex",
		position: "relative",
		padding: "3rem",
		width: "100%",
		border: "6px dotted #FFD148"
	}
}));

const useStyleFeedback = makeStyles(() => ({
	feedbackElement: {
		backgroundColor: "#8AFF83",
		position: "absolute",
		width: "100%",
		zIndex: 10,
		top: "61px",
		fontWeight: "bold",
		fontSize: "large",
	}
}));


const CampaignItemCard = (props) => {
	const {addItem} = useCart();

	const {feedbackElement} = useStyleFeedback();

	const {cardItem} = useStyleCardItem();
	const {buttonElements} = useStylesButtons();
	const {textElements} = useStyleText();
	const {priceElement} = useStylePrice();
	const {cardElement} = useStyleCard();
	const [quantity, setQuantity] = useState(1);

	/*function feedBackToUserWhenAddedToCart() {

		return(
			<div>
				<p className={feedbackElement}>
					BALLTRYNE
				</p>
			</div>
			//FIXME JSX utskrift funker faen ikke her, help, kun vanlig boring alert. -rune
			alert(props.title + " er lagt til i handlekurven din")
		)
	}*/

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
			<Card className={cardElement} sx={{minWidth: 420, maxWidth: 700}}>
				<CardMedia image={props.img}
				           alt="food item"
				           component="img"
				           height="255"
				           style={{maxWidth: "20rem"}}/>
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
						<Typography style={{fontSize: "17px"}}>
							Før: 199,-. <Typography style={{fontWeight: "bold", fontSize: "27px"}}>NÅ {props.price},-!</Typography>
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
						<Button onClick={() => {addItem(props, quantity); /*feedBackToUserWhenAddedToCart()*/}}
						        id={"add-to-card-button"} style={{
							backgroundColor: '#009688',
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



export default CampaignItemCard;