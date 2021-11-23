import React, {useState} from "react";
import deeppurplePizzaAndCokeImage from "../assets/images/pizzas/deeppurplepluscoke.jpg";
import CampaignItemPrint from "./CampaignItemPrint.js";


const INITIAL_PIZZA_CAMPAIGN = [
	{
		id: "p6",
		title: "Månedens deal!",
		image: deeppurplePizzaAndCokeImage,
		ingredients: "Deep Purple + 0,5l Cola. Ost, tomatsaus, lam, salsa, løk, hemmelig saus, basilikum",
		price: "99",
	},
];

const CampaignStorage = () => {

	const [pizzas, setPizzas] = useState(INITIAL_PIZZA_CAMPAIGN);

	return (
		<CampaignItemPrint items={pizzas}/>
	);
}

export default CampaignStorage;