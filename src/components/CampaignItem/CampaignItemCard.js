import React, {useState} from "react";
import {makeStyles} from '@material-ui/styles';
import {Button, CardActions, CardContent, CardMedia, Typography, useMediaQuery, useTheme} from "@material-ui/core";
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
		width: "700px",
		border: "6px dotted #FFD148"
	}
}));

// mobil oppsett styling

const useStyleMobileCardElement = makeStyles(() => ({
	mobileCardElement: {
		display: "flex",
		position: "relative",
		padding: "1rem",
		width: "100%",
		border: "3px dotted #FFD148"
	}
}));

const useStyleMobileTextElements = makeStyles(() => ({
	mobileTextElements: {
		position: "absolute",
		bottom: "85px",
		textAlign: "right",
		width: "50%",
		left: "50%",
	}
}));

const useStyleMobileButtonElements = makeStyles(() => ({
	mobileButtonElements: {
		position: "absolute",
		textAlign: "right",
		height: "50%",
		width: "50%",
		top: "70%",
		left: "50%",
	},
}));

const useStyleMobilePriceElement = makeStyles(() => ({
	mobilePriceElement: {
		position: "absolute",
		bottom: "53px",
		right: "1%",
	}
}));

const useStyleMobileCardItem = makeStyles(() => ({
	mobileCardItem: {
		position: "relative",
		display: "flex",
		justifyContent: "center",
		flex: "auto",
		marginBottom: "25rem",
	},
}));


const CampaignItemCard = (props) => {
	const {addItem} = useCart();
	const [quantity, setQuantity] = useState(1);

	const {cardItem} = useStyleCardItem();
	const {buttonElements} = useStylesButtons();
	const {textElements} = useStyleText();
	const {priceElement} = useStylePrice();
	const {cardElement} = useStyleCard();

	// mobil oppsett

	const {mobileCardElement} = useStyleMobileCardElement();
	const {mobileTextElements} = useStyleMobileTextElements();
	const {mobileButtonElements} = useStyleMobileButtonElements();
	const {mobilePriceElement} = useStyleMobilePriceElement();
	const {mobileCardItem} = useStyleMobileCardItem();


	const incrementCounter = () => {
		setQuantity(quantity + 1);
	};
	const decrementCounter = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

	return (

		<>

			{isMatch ?

				<div className={mobileCardItem} style={{width: "200px"}}>
					<Card className={mobileCardElement}>
						<CardMedia image={props.img} alt="food item" component="img" height="150" style={{maxWidth: "12rem"}}/>
						<div className={mobileTextElements}>
							<CardContent>
								<div>
									<Typography variant="h5" component="div">
										{props.title}
									</Typography>
								</div>
								<div>
									<Typography sx={{fontSize: "12px"}}>
										{props.ingredients}
									</Typography>
								</div>
							</CardContent>
						</div>
						<div className={mobilePriceElement}>
							<Typography style={{fontSize: "14px"}}>
								Før: 199,-. <Typography style={{fontWeight: "bold", fontSize: "23px"}}>NÅ {props.price},-!</Typography>
							</Typography>
						</div>
						<div className={mobileButtonElements}>
							<CardActions>
								<Button onClick={decrementCounter} size={"small"} variant={"outlined"}>-</Button>
								<span style={{
									width: "2rem",
									display: "flex",
									justifyContent: "center",
									fontWeight: "bold",
									fontSize: "20px",
									margin: "5px",
								}}>{quantity}</span>
								<Button size={"small"} variant={"outlined"} onClick={incrementCounter}>+</Button>
								<Button onClick={() => {
									addItem(props, quantity); /*feedBackToUserWhenAddedToCart()*/
								}} id={"add-to-card-button"} style={{
									backgroundColor: '#006357',
									color: 'white',
									width: "30%",
								}}>Legg til</Button>
							</CardActions>
						</div>
					</Card>
				</div>
				: (
					<div className={cardItem}>
						<Card className={cardElement}>
							<CardMedia image={props.img} alt="food item" component="img" height="255" style={{maxWidth: "20rem"}}/>
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
										Før: 199,-. <Typography
										style={{fontWeight: "bold", fontSize: "27px"}}>NÅ {props.price},-!</Typography>
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
										addItem(props, quantity); /*feedBackToUserWhenAddedToCart()*/
									}} id={"add-to-card-button"} style={{
										backgroundColor: '#006357',
										color: 'white',
										margin: '1em',
										width: "30%",
									}}>Legg til</Button>
								</CardActions>
							</div>
						</Card>
					</div>)}
		</>
	);
}


export default CampaignItemCard;