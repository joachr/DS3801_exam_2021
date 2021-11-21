import MenuItemCard from "./MenuItemCard.js";
import {makeStyles} from "@material-ui/core";



const useStyles = makeStyles(() => ({
	menuPrint: {
		position: "relative",
		display: "flex",
		flexWrap: "wrap",
		width: "100%",
	},
}));

const MenuItemPrint = (props) => {

	const {menuPrint} = useStyles();

	return (
		<div className={menuPrint}>
				{props.items.map((item) => (
					<MenuItemCard
						key={item.id}
						title={item.title}
						price={item.price}
						ingredients={item.ingredients}
						img={item.image}
						id={item.id}/>
				))}
		</div>
	)
}

export default MenuItemPrint;