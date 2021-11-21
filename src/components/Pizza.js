import PizzaItem from "./PizzaItem.js";
import {makeStyles} from "@material-ui/core";



const useStyles = makeStyles(() => ({
	pizzaPrint: {
		position: "relative",
		display: "flex",
		flexWrap: "wrap",
		width: "100%",
	},
}));

const Pizza = (props) => {

	const {pizzaPrint} = useStyles();

	return (
		<div className={pizzaPrint}>
				{props.items.map((pizza) => (
					<PizzaItem
						key={pizza.id}
						title={pizza.title}
						price={pizza.price}
						ingredients={pizza.ingredients}
						img={pizza.image}
						id={pizza.id}/>
				))}
		</div>
	)
}

export default Pizza;