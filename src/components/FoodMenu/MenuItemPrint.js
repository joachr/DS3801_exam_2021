import {makeStyles} from "@material-ui/styles";
import SideBar from "../SideBar/SideBar.js";
import MenuItemCard from "./MenuItemCard.js";

const useStyles = makeStyles(() => ({
	menuPrint: {
		position: "relative",
		display: "flex",
		flexWrap: "wrap",
		top: "8rem",
	},
}));

const MenuItemPrint = (props) => {

	const {menuPrint} = useStyles();

	return (
		<div style={{display: "flex", flexDirection: "column"}}>
			<SideBar/>
			<div className={menuPrint}>

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