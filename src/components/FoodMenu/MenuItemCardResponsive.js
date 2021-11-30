import React, {useState} from "react";
import {Button, CardActions, CardContent, CardMedia, Typography, useMediaQuery} from "@material-ui/core";
import Card from "@mui/material/Card";
import {useCart} from "react-use-cart";
import styles from './css/menu.module.css';
import {createTheme} from "@material-ui/core/styles";


const MenuItemCardResponsive = (props) => {
	const {addItem} = useCart();
	const [quantity, setQuantity] = useState(1);

	const incrementCounter = () => {
		setQuantity(quantity + 1);
	};
	const decrementCounter = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const theme = createTheme({
		breakpoints: {
			values: {
				mobile: 500
			}
		}
	});

	const isMatch = useMediaQuery(theme.breakpoints.down('mobile'));

	return (

		<div className={styles.cardItem}>
			<Card className={styles.cardElement} sx={{minWidth: 420, maxWidth: 580}}>

				{isMatch ? <CardMedia image={props.img}
				                      alt="food item"
				                      component="img"
				                      height="120"
				                      style={{maxWidth: "7.3rem", margin: "1rem"}}
									/>
					: (

										<CardMedia image={props.img}
									           alt="food item"
									           component="img"
									           height="255"
									           style={{maxWidth: "16rem", margin: "1rem"}}
										/>
						)
				}
					<div className={styles.textElement}>
						<CardContent className={styles.cardContent}>
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
					<div className={styles.buttonElement}>
						<div className={styles.priceElement}>
							<Typography style={{fontWeight: "bold", fontSize: "27px"}}>
								{props.price},-
							</Typography>
						</div>
						<CardActions>
							<Button onClick={decrementCounter} size={"small"} variant={"outlined"}>-</Button>
							<span className={styles.quantitySpan}>{quantity}</span>
							<Button size={"small"} variant={"outlined"} onClick={incrementCounter}>+</Button>
							<Button style={{backgroundColor: "#006357", color: "white"}} onClick={() => {
								addItem(props, quantity)
							}} className={styles.addToCartButton} title={"Legg til"}>Legg til</Button>
						</CardActions>
					</div>
				</Card>
		</div>
	);
}


export default MenuItemCardResponsive;