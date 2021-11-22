import React, {useState} from "react";
import cokeBeverageImage from "../assets/images/beverages/coke.jpg";
import burnBeverageImage from "../assets/images/beverages/burn.png";
import imsdalBeverageImage from "../assets/images/beverages/imsdal.png";
import drpepperBeverageImage from "../assets/images/beverages/drpepper.jpg";
import spriteBeverageImage from "../assets/images/beverages/sprite.jpg";
import drpepperlightBeverageImage from "../assets/images/beverages/drpepperlight.jpg";
import MenuItemPrint from "./MenuItemPrint.js";


const INITIAL_BEVERAGES = [
	{
		id: "b1",
		title: "Coca Cola",
		image: cokeBeverageImage,
		ingredients: "0,5l",
		price: "25",
	},
	{
		id: "b2",
		title: "Burn",
		image: burnBeverageImage,
		ingredients: "0,5l",
		price: "25",
	},
	{
		id: "b3",
		title: "Imsdal",
		image: imsdalBeverageImage,
		ingredients: "0,5l",
		price: "20",
	},
	{
		id: "b4",
		title: "Sprite",
		image: spriteBeverageImage,
		ingredients: "0,5l",
		price: "25",
	},
	{
		id: "b5",
		title: "Dr. Pepper",
		image: drpepperBeverageImage,
		ingredients: "0,5l",
		price: "25",
	},
	{
		id: "b6",
		title: "Dr. Pepper light",
		image: drpepperlightBeverageImage,
		ingredients: "0,5l",
		price: "25",
	},
];

const BeverageStorage = () => {

	const [beverages, setBeverages] = useState(INITIAL_BEVERAGES);

	return (
		<MenuItemPrint items={beverages}/>
	);
}

export default BeverageStorage;