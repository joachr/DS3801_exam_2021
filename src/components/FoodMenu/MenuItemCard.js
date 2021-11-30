import React from 'react';
import MenuItemCardResponsive from "./MenuItemCardResponsive.js";

const MenuItemCard = (props) => {
	return (
		<>
			<MenuItemCardResponsive title={props.title}
			                        price={props.price}
			                        ingredients={props.ingredients}
			                        img={props.img}
			                        id={props.id}
			/>
		</>
	);
};

export default MenuItemCard;
