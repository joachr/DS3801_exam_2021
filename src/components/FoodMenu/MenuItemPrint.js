import SideBar from "../SideBar/SideBar.js";
import MenuItemCard from "./MenuItemCard.js";
import styles from './css/menu.module.css';
import React from "react";

const MenuItemPrint = (props) => {


	return (
		<div style={{display: "flex", flexDirection: "column"}}>
			<SideBar/>
			<div className={styles.menuItemPrint}>

				{props.items.map((item) => (
					<MenuItemCard title={item.title}
					                     price={item.price}
					                     ingredients={item.ingredients}
					                     img={item.image}
					                     id={item.id}
					                     item={item}
					                     key={item.id}/>
				))}
			</div>
		</div>
	)
}

export default MenuItemPrint;