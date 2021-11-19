import React from "react";
import {Button, CardMedia, makeStyles} from "@material-ui/core";
import Card from "@mui/material/Card";


const useStyles = makeStyles(() => ({
	pizzaItem: {
		position: "absolute",
		top: "7rem",
		left: "10rem",
		display: "grid",
	},
}));


const PizzaItem = (props) => {

	const { pizzaItem } = useStyles();

	return (
			<div className={pizzaItem}>
				<Card>
					<h2>{props.title}</h2>
					<CardMedia
						image={props.img}
						alt="margarita-pizza"
						component="img"
						height="350"
					/>
					<p>{props.price}</p>
					<Button style={{
						backgroundColor: '#009688',
						color: 'white',
						margin: '1em',
					}}>Legg til</Button>
				</Card>
			</div>
	);
}


export default PizzaItem;