import React from "react";
import {CardMedia, makeStyles} from "@material-ui/core";
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
					<p>{props.price}</p>
					<CardMedia
						image={props.img}
						alt="margarita-pizza"
						component="img"
						height="180"
						width="50"
					/>
				</Card>
			</div>
	);
}


export default PizzaItem;