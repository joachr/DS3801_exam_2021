import PizzaItem from "./PizzaItem.js";

const Pizza = (props) => {

	return (
		<div>
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