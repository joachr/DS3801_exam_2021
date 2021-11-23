import {AppBar, Badge, Fab, Toolbar} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import HeaderButton from "./HeaderButton";
import EventSeatRoundedIcon from '@material-ui/icons/EventSeatRounded';
import RestaurantMenuRoundedIcon from '@material-ui/icons/RestaurantMenuRounded';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React from "react";
import {useCart} from "react-use-cart";
import IconButton from '@mui/material/IconButton';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";

const useStyles = makeStyles(() => ({
	header: {
		backgroundColor: "#FFD148",
	},
}));

const useStyleName = makeStyles(() => ({
	nameStyling: {
		position: "absolute",
		width: "30rem",
		display: "flex",
		justifyContent: "center",
		left: "5rem",
	},
}));

const useStyleLogoAndName = makeStyles(() => ({
	logoAndNameContainer: {
		position: "relative",
		display: "flex",
		right: "65%",
	}
}));

function Header({func1, func2}) {
	const {header} = useStyles();
	const {nameStyling} = useStyleName();
	const {logoAndNameContainer} = useStyleLogoAndName();

	return (
		<div>
			<AppBar className={header}><Toolbar style={{
				position: 'relative',
				alignItems: 'right',
				justifyContent: 'right',
				backgroundColor: '#FFD148',
				height: '4.5rem'
			}}>
				<IconButton
					component={Link}
					to="/"
					size="large"
					edge="start"
					aria-label="menu"
					className={logoAndNameContainer}
				>
					<FoodBankIcon style={{fontSize: '70px', color: '#009688'}} />
					<Typography style={{fontSize: "40px"}} className={nameStyling} component="div">
						Barcelona Pizza & Salad
					</Typography>
				</IconButton>

				<HeaderButton  text="Hjem" href={'/'} />
				<HeaderButton icon={<EventSeatRoundedIcon/>} text="Reserver" click={func1}/>
				<HeaderButton icon={<RestaurantMenuRoundedIcon/>} text="Meny" href='/pizza'/>
				<Badge anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} color="info" overlap="circular"
				       badgeContent={useCart().totalItems}>
					<Fab style={{backgroundColor: '#009688'}} onClick={func2}>
						<ShoppingCartOutlinedIcon fontSize="large" style={{
							color: 'black',
							marginLeft: '0.5em',
							marginRight: '0.5em'
						}}/>
					</Fab>
				</Badge>
			</Toolbar></AppBar>
		</div>
	);
}

export default Header
