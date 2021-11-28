import React from 'react';
import {useMediaQuery, useTheme} from "@material-ui/core";
import MenuItemCardMobile from "./MenuItemCardMobile.js";
import MenuItemCardDesktop from "./MenuItemCardDesktop.js";
import {createTheme} from "@material-ui/core/styles";

const MenuItemCard = (props) => {

	const theme = createTheme({
		breakpoints: {
			values: {
				mobile: 500,
				tablet: 750,
				laptop: 1024,
				desktop: 1200,
			},
		},
	});

	const isMatch = useMediaQuery(theme.breakpoints.down('mobile'));


	return (
		<>
			{isMatch ?  <MenuItemCardMobile title={props.title}
			                                price={props.price}
																			ingredients={props.ingredients}
			                                img={props.img}
			                                id={props.id}

									/>
				: (
									<MenuItemCardDesktop title={props.title}
									                     price={props.price}
									                     ingredients={props.ingredients}
									                     img={props.img}
									                     id={props.id}
									/>
					)
			}
		</>
	);
};

export default MenuItemCard;
