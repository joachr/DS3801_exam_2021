import MenuItemCard from "./MenuItemCard.js";
import {makeStyles} from "@material-ui/styles";



const useStyles = makeStyles(() => ({
	menuPrint: {
		position: "relative",
		display: "flex",
		flexWrap: "wrap",
		width: "100%",
		top: "10rem",
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