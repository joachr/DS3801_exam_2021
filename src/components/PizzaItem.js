import React, {useState} from "react";
import '../components/assets/css/fonts.css'
import {Button, CardActions, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";
import Card from "@mui/material/Card";


const useStylePizzaItem = makeStyles(() => ({
	pizzaItem: {
		position: "relative",
		display: "flex",
		flex: "1 1",
		top: "7rem",
		marginBottom: "6rem",
		flexBasis: "30%",
	},
}));

const useStylesButtons = makeStyles(() => ({
	buttonElements: {
		position: "relative",
		display: "flex",
		top: "6rem",
		right: "12rem",
	},
}));

const useStyleText = makeStyles(() => ({
	textElements: {
		position: "relative",
		flexWrap: "wrap",
		flexDirection: "column",
		bottom: "2rem",
		right: "20px",
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
						height="250"
						style={{width: "50%"}}
					/>
					<div className={textElements}>
						<CardContent>
								<Typography gutterBottom variant="h4" component="div">
									{props.title}
								</Typography>
								<Typography style={{fontSize: "17px"}} variant="body2" color="text.secondary" component={"div"}>
									{props.ingredients}
								</Typography>
								<Typography style={{fontWeight: "bold", fontSize: "30px"}}>
									kr. {props.price},-
								</Typography>
						</CardContent>
					</div>
					<div className={buttonElements}>
						<CardActions>
							<Button size={"medium"} id={"add-to-card-button"} style={{
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
								width: "3rem",
								display: "flex",
								justifyContent: "center",
								borderRadius: "10%",
								fontSize: "larger",
							}}>{counter}</span>
							<Button onClick={incrementCounter} size={"small"} style={{
								backgroundColor: '#009688',
								color: 'white'}}>+</Button>
						</CardActions>
					</div>
				</Card>
			</div>
	);
}


export default PizzaItem;