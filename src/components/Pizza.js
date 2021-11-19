import PizzaItem from "./PizzaItem.js";
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles(() => ({
	pizzaPrint: {
		display: "flex",
		alignItems: "center",
		width: "100%",
		justifyContent: "space-evenly",
	}
}))

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