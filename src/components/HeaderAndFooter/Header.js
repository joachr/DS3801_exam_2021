import {AppBar, Badge, Fab, Toolbar, useMediaQuery, useTheme} from "@material-ui/core";
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
import {createTheme} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	header: {
		backgroundColor: "#FFD148",
	},
}));


function Header({func1, func2}) {

	const theme = createTheme({
		breakpoints: {
			values: {
				mobile: 550,
				tablet: 750,
				laptop: 1024,
				desktop: 1200,
			},
		},
	});

	const {header} = useStyles();
	const isMatchTablet = useMediaQuery(theme.breakpoints.down("tablet"));
	const isMatchMobile = useMediaQuery(theme.breakpoints.down("mobile"));

	//FIXME legg på egne knapper for mobil, se på burger meny muligheter evt

	return (
		<div style={{width: "100%"}}>
			<AppBar className={header}>
				<Toolbar style={{
				position: 'relative',
				backgroundColor: '#FFD148',
				height: '4.5rem',

			}}>
				<IconButton component={Link} to="/" size="large" aria-label="menu" sx={{mr: 'auto'}}>
					<FoodBankIcon style={{fontSize: '70px', color: '#004f46'}}/>


					{isMatchMobile ? <Typography/> : (
						<Typography style={{font: "'Zen Maru Gothic', sans-serif", fontSize: '30px', fontWeight: 'bold'}}
						            component="div">
							Pizzeria Bella
						</Typography>)}

				</IconButton>

				<HeaderButton text="Hjem" href={'/'}/>
				<HeaderButton icon={<EventSeatRoundedIcon/>} text="Reserver" click={func1}/>
				<HeaderButton icon={<RestaurantMenuRoundedIcon/>} text="Meny" href="/pizza"/>


				<Badge anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} color="info" overlap="circular"
				       badgeContent={useCart().totalItems}>
					<Fab style={{backgroundColor: '#006357'}} onClick={func2}>
						<ShoppingCartOutlinedIcon fontSize="large" style={{
							color: 'white',
						}}/>
					</Fab>
				</Badge>
			</Toolbar>
			</AppBar>
		</div>
	);
}

export default Header
