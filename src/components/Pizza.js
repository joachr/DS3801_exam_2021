import PizzaItem from "./PizzaItem.js";
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles(() => ({
	pizzaPrint: {
		position: "relative",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		height: "100vh",
		justifyContent: "space-evenly",
	},
}));

const Pizza = (props) => {

	const {pizzaPrint} = useStyles();

	return (
		<div className={pizzaPrint}>
				{props.items.map((pizza) => (
					<PizzaItem
						title={pizza.title}
						price={pizza.price}
						img={pizza.image}/>
				))}
		</div>
	)
}

export default Pizza;