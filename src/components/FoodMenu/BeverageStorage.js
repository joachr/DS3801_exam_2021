import React, {useState} from "react";
import cokeBeverageImage from "../assets/images/beverages/coke.jpg";
import burnBeverageImage from "../assets/images/beverages/burn.jpeg";
import bonaquaBeverageImage from "../assets/images/beverages/bonaqua.jpeg";
import drpepperBeverageImage from "../assets/images/beverages/drpepper.jpeg";
import spriteBeverageImage from "../assets/images/beverages/sprite.jpg";
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
		ingredients: "0,25l",
		price: "25",
	},
	{
		id: "b3",
		title: "Bon Aqua",
		image: bonaquaBeverageImage,
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
];

const BeverageStorage = () => {

	const [beverages, setBeverages] = useState(INITIAL_BEVERAGES);

	return (
		<MenuItemPrint items={beverages}/>
	);
}

export default BeverageStorage;