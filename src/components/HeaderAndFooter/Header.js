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

const displayDesktop = () => {
	return <Toolbar style={{
		position: 'relative',
		alignItems: 'right',
		justifyContent: 'right',
		backgroundColor: '#FFD148',
	}}>
		<HeaderButton icon={<EventSeatRoundedIcon/>} text="Reserver bord"/>
		<HeaderButton icon={<RestaurantMenuRoundedIcon/>} text="Meny"/>

		<Badge anchorOrigin={{vertical: 'bottom', horizontal: 'left',}} color="secondary" overlap="circular"
		       badgeContent="5">

			<Fab style={{backgroundColor: '#009688'}}>

				<ShoppingCartOutlinedIcon fontSize="large" style={{
					color: 'black',
					marginLeft: '0.5em',
					marginRight: '0.5em'
				}}/>
			</Fab>
		</Badge>
	</Toolbar>;
};

function Header({func1, func2}) {
	const {header} = useStyles();

	return (
		<div>
			<AppBar className={header}><Toolbar style={{
				position: 'relative',
				alignItems: 'right',
				justifyContent: 'right',
				backgroundColor: '#FFD148',
			}}>
				<IconButton
					component={Link}
					to="/"
					size="large"
					edge="start"
					aria-label="menu"
					sx={{ mr: 161 }}
				>
					<FoodBankIcon style={{fontSize: '70px', color: '#009688'}} />
					<Typography style={{ font: "'Zen Maru Gothic', sans-serif", fontSize: '30px', fontWeight: 'bold'}} component="div" sx={{ flexGrow: 1 }}>
						Barcelona Pizza & Salad
					</Typography>
				</IconButton>

				<HeaderButton icon={<EventSeatRoundedIcon/>} text="Reserver bord" click={func1}/>
				<HeaderButton icon={<RestaurantMenuRoundedIcon/>} text="Meny"/>
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
