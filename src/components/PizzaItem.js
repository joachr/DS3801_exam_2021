import React, {useState} from "react";
import '../components/assets/css/fonts.css'
import {Button, CardActions, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";
import Card from "@mui/material/Card";


const useStylePizzaItem = makeStyles(() => ({
	pizzaItem: {
		position: "relative",
		display: "flex",
		flex: "1 1 auto",
		top: "10rem",
		marginBottom: "2rem",
		boxSizing: "border-box",
/*		"&:hover": {
			transition: "transform .1s ease",
			transform: "scale(1.01)",
		}*/
	},
}));

const useStylesButtons = makeStyles(() => ({
	buttonElements: {
		position: "relative",
		top: "11rem",
		right: "1rem",
	},
}));

const useStyleText = makeStyles(() => ({
	textElements: {
		position: "absolute",
		display: "flex",
		textAlign: "right",
		width: "55%",
		height: "55%",
		bottom: "8rem",
		left: "16rem",
	}
}));

const useStylePrice = makeStyles(() => ({
	priceElement: {
		position: "absolute",
		top: "-2rem",
		left: "200px",
	}
}));

const useStyleCard = makeStyles(() => ({
	cardElement: {
		display: "flex",
		position: "relative",
		padding: "1rem",
		margin: "1rem",
	}
}));


const PizzaItem = (props) => {
	const { pizzaItem } = useStylePizzaItem();
	const { buttonElements } = useStylesButtons();
	const { textElements } = useStyleText();
	const { priceElement } = useStylePrice();
	const { cardElement } = useStyleCard();

	const [counter, setCounter] = useState(1);

	const incrementCounter = () => {
	  setCounter(counter + 1);
	};
	const decrementCounter = () => {
		if (counter > 1) {
			setCounter(counter - 1);
		}
	};

	return (
			<div className={pizzaItem}>
				<Card className={cardElement} sx={{ maxWidth: 580 }}>
					<CardMedia
						image={props.img}
						alt="margarita-pizza"
						component="img"
						height="250"
						style={{width: "50%"}}
					/>
					<div className={textElements}>
						<CardContent style={{maxHeight: "300px"}}>
								<Typography gutterBottom variant="h4" component="div">
									{props.title}
								</Typography>
								<Typography style={{fontSize: "17px"}} variant="body2" color="text.secondary" component={"div"}>
									{props.ingredients}
								</Typography>
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
							}}>{counter}</span>
							<Button size={"small"} variant={"outlined"} onClick={incrementCounter}>+</Button>
							<Button size={"large"} id={"add-to-card-button"} style={{
								backgroundColor: '#009688',
								color: 'white',
								margin: '1em',
								width: "6rem",
							}}>Legg til</Button>
						</CardActions>
					</div>
				</Card>
			</div>
	);
}


export default PizzaItem;