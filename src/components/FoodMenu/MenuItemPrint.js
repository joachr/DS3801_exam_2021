import MenuItemCard from "./MenuItemCard.js";
import {makeStyles} from "@material-ui/styles";
import SideBar from "../SideBar.js";

const useStyles = makeStyles(() => ({
    menuPrint: {
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        top: "8rem",
    },
}));

const MenuItemPrint = (props) => {

    const {menuPrint} = useStyles();

    return (
        <div>
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