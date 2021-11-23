import React, {useState} from "react";
import margaritaPizzaImage from "../assets/images/pizzas/margarita.jpeg";
import basilPizzaImage from "../assets/images/pizzas/basil.jpg";
import baconbedPizzaImage from "../assets/images/pizzas/baconbed.jpg";
import cadonationPizzaImage from "../assets/images/pizzas/cadonation.jpg";
import chanterelleheavenPizzaImage from "../assets/images/pizzas/chanterelleheaven.jpg";
import deeppurplePizzaImage from "../assets/images/pizzas/deeppurple.jpg";
import MenuItemPrint from "./MenuItemPrint.js";


const INITIAL_PIZZAS = [
	{
		id: "p1",
		title: "Margarita",
		image: margaritaPizzaImage,
		ingredients: "ost, tomatsaus, basilikum",
		price: "199",
	},
	{
		id: "p2",
		title: "Basil",
		image: basilPizzaImage,
		ingredients: "ost, tomatsaus, bacon, basilikum, sjampinjong, oliven",
		price: "169",
	},
	{
		id: "p3",
		title: "Bacon Bed",
		image: baconbedPizzaImage,
		ingredients: "ost, tomatsaus, spicy pepper, oregano, bacon, og litt mer bacon",
		price: "199",
	},
	{
		id: "p4",
		title: "Cadonation",
		image: cadonationPizzaImage,
		ingredients: "ost, kremet saus, høne, appelsin, avocado, sennep",
		price: "209",
	},
	{
		id: "p5",
		title: "Chanterelle Heaven",
		image: chanterelleheavenPizzaImage,
		ingredients: "ost, trøffelsaus, steinsopp, kantareller, sjampinjong, løk",
		price: "239",
	},
	{
		id: "p6",
		title: "Deep Purple",
		image: deeppurplePizzaImage,
		ingredients: "ost, tomatsaus, lam, salsa, løk, hemmelig saus, basilikum",
		price: "199",
	},
];

const PizzaStorage = () => {

	const [pizzas, setPizzas] = useState(INITIAL_PIZZAS);

	return (
			<MenuItemPrint items={pizzas}/>
	);
}

export default PizzaStorage;