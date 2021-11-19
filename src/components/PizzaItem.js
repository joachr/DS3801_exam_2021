import React, {useState} from "react";
import {Button, CardActions, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";
import Card from "@mui/material/Card";
import {FilledInput, Input} from "@mui/material";


const useStyles = makeStyles(() => ({
	pizzaItem: {
		position: "relative",
		display: "flex",
		flex: "1 1 30%",
		left: "15rem",
		top: "7rem",
		marginBottom: "6rem",
	},
}));



const PizzaItem = (props) => {
	const { pizzaItem } = useStyles();
	const [counter, setCounter] = useState(1);

	const incrementCounter = () => {
	  setCounter(counter + 1);
	};
	const decrementCounter = () => {
		setCounter(counter - 1);
	};

	// console log fungerer og passer rett value wtf
	console.log(counter)

	//FIXME rune: funker ikke enda, er det pga state?? Number oppdateres ikke

	return (
			<div className={pizzaItem}>
				<Card sx={{ maxWidth: 345 }}>
					<CardMedia
						image={props.img}
						alt="margarita-pizza"
						component="img"
						height="350"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{props.title}
						</Typography>
						<Typography variant="body2" color="text.secondary" component={"div"}>
							{props.ingredients}
						</Typography>
						<Typography>
							kr. {props.price},-
						</Typography>
					</CardContent>
					<CardActions>
						<Button size={"medium"} id={"add-to-card-button"} style={{
							backgroundColor: '#009688',
							color: 'white',
							margin: '1em',
						}}>Legg til</Button>
						<Button onClick={decrementCounter} id={"subtract-amount-button"} size={"small"} style={{
							backgroundColor: '#009688',
							color: 'white'}}>-</Button>
						<Input type={"number"} readOnly={"readonly"} min={1} size={"small"} style={{
							backgroundColor: '#009688',
							color: 'white',
							width: "10%",
							borderRadius: "10%",
							//FIXME rune: funker ikke å få fjerna lille linja enda som animerer når en klikker i inputet
							outline: "none",
							appearance: "none",
						}}>{counter}</Input>
						<Button onClick={incrementCounter} size={"small"} style={{
							backgroundColor: '#009688',
							color: 'white'}}>+</Button>
					</CardActions>
				</Card>
			</div>
	);
}


export default PizzaItem;