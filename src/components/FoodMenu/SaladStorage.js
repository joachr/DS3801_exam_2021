import React, {useState} from "react";
import caesarthegreatSaladImage from "../assets/images/salads/caesarthegreat.jpeg";
import wakamesalatSaladImage from "../assets/images/salads/chukasalad.jpeg";
import mrgreekSaladImage from "../assets/images/salads/mrgreek.jpeg";
import proscuittoSaladImage from "../assets/images/salads/proscuittosalad.jpeg";
import turkeySaladImage from "../assets/images/salads/turkeysalad.jpeg";
import MenuItemPrint from "./MenuItemPrint.js";


const INITIAL_SALADS = [
	{
		id: "s1",
		title: "Caesar the great",
		image: caesarthegreatSaladImage,
		ingredients: "kyllingfilet, tomat, salat mix, egg, parmesan, caesar-saus",
		price: "139",
	},
	{
		id: "s2",
		title: "Wakame salat",
		image: wakamesalatSaladImage,
		ingredients: "wakame salat, nøttesaus, sesamfrø",
		price: "69",
	},
	{
		id: "s3",
		title: "Mr. Greek",
		image: mrgreekSaladImage,
		ingredients: "tomat, agurk, chili, feta, oliven, salat mix, olivenolje",
		price: "119",
	},
	{
		id: "s4",
		title: "Proscuitto salat",
		image: proscuittoSaladImage,
		ingredients: "proscuitto, salat mix, parmesan, cherry tomat, basilikum, basilikum-saus",
		price: "139",
	},
	{
		id: "s5",
		title: "Kalkun salat",
		image: turkeySaladImage,
		ingredients: "karamellisert kalkun, cherry tomat, salat mix, appelsinbiter, caesar-saus",
		price: "149"
	},
	{
		id: "s6",
		title: "Kylling salat",
		image: turkeySaladImage,
		ingredients: "karamellisert kylling, cherry tomat, salat mix, appelsinbiter, caesar-saus",
		price: "139"
	},
];

const SaladStorage = () => {

	const [salads, setSalads] = useState(INITIAL_SALADS);

	return (
		<MenuItemPrint items={salads}/>
	);
}

export default SaladStorage;