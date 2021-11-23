import React from 'react';
import {Link} from 'react-router-dom';
import {sidebarData} from './SideBarData';
import {makeStyles} from "@material-ui/styles";
import Button from "@mui/material/Button";
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@emotion/react';


const useStyleListSidebar = makeStyles(() => ({
	listItems: {
		position: "relative",
		display: "flex",
		fontSize: '15px',
	}
}))

const useStyleSidebar = makeStyles(() => ({
	sidebarStyle: {
		position: "sticky",
		display: "flex",
		justifyContent: "center",
		alignSelf: "flex-start",
		top: "45px",
		zIndex: '1'
	}
}))


function SideBar() {
	const {listItems} = useStyleListSidebar();
	const {sidebarStyle} = useStyleSidebar();
	const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<div className={sidebarStyle}>

			{sidebarData.map((item) => {
				return (
					<div className={listItems}>

					{isMatch ? <Button variant={"contained"} component={Link} to={item.path} style={{
							backgroundColor: '#006357',
              				position: "relative",
							color: 'white',
							marginTop: '1.4rem',
							marginLeft: '0.5rem',
              				borderRadius: "0 0 7px 7px",
							height: '2.5rem'
						}}><div style={{fontSize: '12px'}}>
						{item.title}
					</div></Button> : (
						<Button variant={"contained"} component={Link} to={item.path} style={{
							backgroundColor: '#006357',
              position: "relative",
							color: 'white',
							margin: '1rem',
              display: "inline-block",
              borderRadius: "0 0 7px 7px",
						}}>
							<div style={{fontSize: '40px'}}>
								{item.icon}
							</div>
							<span>
                {item.title}
              </span>
						</Button>)}

					</div>

				)
			})}

		</div>
	);
}

export default SideBar


