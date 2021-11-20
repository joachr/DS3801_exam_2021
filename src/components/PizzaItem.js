import React, {useState} from "react";
import {Button, CardActions, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";
import Card from "@mui/material/Card";
import {FilledInput, Input} from "@mui/material";


const useStylePizzaItem = makeStyles(() => ({
	pizzaItem: {
		position: "relative",
		display: "flex",
		flex: "1 1 1",
		left: "12rem",
		top: "7rem",
		marginBottom: "6rem",
		flexBasis: "33%",
	},
}));

const useStylesButtons = makeStyles(() => ({
	buttonElements: {
		display: "flex",
		position: "absolute",
		top: "20rem",
		left: "15rem",
	},
}));

const useStyleText = makeStyles(() => ({
	textElements: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
	}
}));




const PizzaItem = (props) => {
	const { pizzaItem } = useStylePizzaItem();
	const { buttonElements } = useStylesButtons();
	const { textElements } = useStyleText();

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
				<Card style={{padding: "1rem", margin: "1rem", display: "flex"}}>
					<CardMedia
						image={props.img}
						alt="margarita-pizza"
						component="img"
						height="350"
						style={{width: "70%"}}
					/>
					<CardContent className={textElements}>
						<Typography gutterBottom variant="h5" component="div">
							{props.title}
						</Typography>
						<Typography variant="body2" color="text.secondary" component={"div"}>
							{props.ingredients}
						</Typography>
						<Typography style={{fontWeight: "bold", fontSize: "30px"}}>
							kr. {props.price},-
						</Typography>
					</CardContent>
						<CardActions className={buttonElements}>
							<Button size={"large"} id={"add-to-card-button"} style={{
								backgroundColor: '#009688',
								color: 'white',
								margin: '1em',
							}}>Legg til</Button>
							<Button onClick={decrementCounter} size={"small"} style={{
								backgroundColor: '#009688',
								color: 'white'}}>-</Button>
							<span style={{
								backgroundColor: '#009688',
								color: 'white',
								width: "2rem",
								display: "flex",
								justifyContent: "center",
								borderRadius: "10%"
							}}>{counter}</span>
							<Button onClick={incrementCounter} size={"small"} style={{
								backgroundColor: '#009688',
								color: 'white'}}>+</Button>
						</CardActions>
				</Card>
			</div>
	);
}


export default PizzaItem;